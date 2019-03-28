    var FK = FK || {};
    FK.Comparision = (function(doc){
        
        var url = 'https://flipkart-mock-product.now.sh',
            data,
            selectedProducts = [],
            container,
            app,
            findDiff = false;

        function init(elem) {
            container = elem;
            fetch(url)
            .then(function(response) {
                return response.json(); //TODO:  check response status
            })
            .then(function(response) {
                data = response;
                buildApp(container);
            })
            .catch(function(error) {
                app = errorHandler();
                container.appendChild(app)
            });
        }

        //TODO: Name internal function starting with _
        function buildApp(container) {
            if(app) {
                container.removeChild(app);
            }
            app = initialize();
            container.appendChild(app);
            //Once DOM is created attach event listeners
            setTimeout(function() {
                attachListeners(container);
            }, 0);
        }

        function initialize() {
            var div = doc.createElement('div');
            div.innerHTML = getSuccessTemplate();
            div.className = 'app-wrapper'
            return div;
        }

        function errorHandler() {
            var div = doc.createElement('div');
            div.innerHTML = getErrorTemplate();
            return div;
        }

        function getErrorTemplate() {
            return `
                <span>Failed to load data</span>
            `;
        }

        function getSuccessTemplate() {
            var count = selectedProducts.reduce(function(finalCount, value) {
                if(value) finalCount++;
                return finalCount;
            }, 0);
            var checked = findDiff ? 'checked' : '';
            return `
                <div class='upper-section flex'>
                    <div class='compare-section'>
                        <h3>Compare</h3>
                        <span>${count} seleceted item</span>
                        <input type="checkbox" id="get-diff" ${checked}/>Show only differences
                    </div>
                    ${getProductSelectionSection()}
                </div>
                <div class='lower-section'>
                    ${getProductFeatureSelection()}
                </div>
            `;
        }

        function getProductSelectionSection() {
            var compareSummary = data.products.compareSummary;
            var productsData = compareSummary.titles;
            var availableProductOptions = Object.keys(productsData).reduce(function(finalResult, productId) {
                finalResult.push({
                    id: productId,
                    title: productsData[productId].title
                })
                return finalResult;
            },[]);

            var productSelectionSection = '';
            for(var i = 0; i < 4; i++) {
                productSelectionSection += `<div class='item-section' id='item-section_${i}'>`
                if(selectedProducts[i] == null || selectedProducts == undefined){
                    
                    productSelectionSection += `
                        <div class='img-placehodler'></div>
                        <b>Add a product</b>
                        <select id='selection_${i}' class='product_selection'>
                            ${getAvailableOptions(i)}
                        </select>
                    `;
                } else {
                    var selectedProduct = selectedProducts[i];
                    
                    productSelectionSection += `
                        <div class='remove'>X</div>
                        <img src='${compareSummary.images[selectedProduct]}' />
                        <b>${compareSummary.titles[selectedProduct].title} ${compareSummary.titles[selectedProduct].subtitle}</b>
                    `
                }
                productSelectionSection += ` </div>`;
            }
            return productSelectionSection;

            function getAvailableOptions(index) {
                var selectedItem = selectedProducts[index];
                
                var availableOptions = '<option value="null">Choose a product</option>';
                for(var i = 0; i < availableProductOptions.length; i++) {
                    var isSelected = availableProductOptions[i].id === selectedItem ? 'selected' : '';
                    if(selectedProducts.indexOf(availableProductOptions[i].id) === -1) {
                        availableOptions += `
                            <option value='${availableProductOptions[i].id}' ${isSelected}>
                                ${availableProductOptions[i].title}
                            </option>
                        `;
                    }
                }
                return availableOptions;
            }
        }

        function getProductFeatureSelection() {
            var productFeatureSelection = '';
            var featuresList = data.products.featuresList;
            for(var i = 0; i < featuresList.length; i++) {
                productFeatureSelection += `
                    <div><b>${featuresList[i].title}</b></div>
                `;
                for(var j = 0; j < featuresList[i].features.length; j++) {
                    var isDifferent = featuresList[i].features[j].properties && featuresList[i].features[j].properties.isDifferent || false;
                    if(!findDiff || isDifferent){
                        productFeatureSelection += "<div class='flex'>";
                        productFeatureSelection += `<div class='feature-section'>${featuresList[i].features[j].featureName}</div>`;
                        for(var k = 0; k < 4; k++) {
                            var selectedItem = selectedProducts[k];
                            productFeatureSelection += `<div class='feature-section'>`;
                            if(selectedItem) {
                                productFeatureSelection += featuresList[i].features[j].values[selectedItem];
                            }
                            productFeatureSelection += `</div>`;
                        }
                        productFeatureSelection += "</div>";
                    }
                }
            }
            return productFeatureSelection;
        }

        function attachListeners(container) {
            attachSelectionListeners(container);
            attachSelectionRemovalListeners(container);
            attachDiffListener(container);
        }

        function attachSelectionListeners(container) {
            var selects = doc.getElementsByClassName('product_selection');
            for(var i = 0; i < selects.length; i++) {
                selects[i].addEventListener('change', function(event) {
                    var productId = event.target.value;
                    var key = event.target.id.split('_')[1];
                    if(productId != "null" && selectedProducts.indexOf(productId) == -1) {
                        selectedProducts[key] = productId;
                    }
                    if(productId == "null") {
                        selectedProducts[key] = null;
                    }
                    buildApp(container);
                });
            }
        }

        function attachSelectionRemovalListeners(container) {
            var removeButton = doc.getElementsByClassName('remove');
            for(var i = 0; i < removeButton.length; i++) {
                removeButton[i].addEventListener('click', function(event) {
                    var index = event.target.parentElement.id.split('_')[1];
                    selectedProducts[index] = null;
                    buildApp(container);
                });
            }
        }

        function attachDiffListener(container) {
            var diffElem = doc.getElementById('get-diff');
            diffElem.addEventListener('change', function(event) {
                findDiff = event.target.checked;
                buildApp(container);
            })
        }

        return {
            init: init 
        }
    })(document);


    var appContainer = document.getElementById('app');
    FK.Comparision.init(appContainer);

