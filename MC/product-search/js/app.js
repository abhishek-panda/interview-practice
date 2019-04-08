(function() {
    var dataApi = "http://demo1853299.mockable.io/products";
    var filterApi = "http://demo1853299.mockable.io/filters";
    var relevantProducts;
    var filterData;
    var sortedProduct;
    var clonedProducts;

    init();

    function init() {
        getProducts();
        getFiltersData();
    }

    function getProducts() {
        fetch(dataApi)
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            relevantProducts = response.products;
            clonedProducts = JSON.parse(JSON.stringify(relevantProducts)); 
            renderProducts(relevantProducts);
        });
    }

    function getFiltersData() {
        fetch(filterApi)
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            filterData = response.filters;
            var colorFilters = filterData.reduce(function (colorFilter, filter) {
                if (filter.type === "COLOUR") {
                    colorFilter = filter.values;
                }
                return colorFilter;
            }, []);
            renderColorFilters(colorFilters);
        });
    }

    function renderProducts(products, keyword) {
        // if (keyword === "filter") {
        //     products = productsResp;
        // } else {
        //     var products;
        //     if (window.products) {
        //         products = window.products;
        //     } else {
        //         products = productsResp.products;
        //         window.products = products;
        //     }
        // }
        
        var productsList = document.getElementById('productsList');
        productsList.innerHTML = "";
        products.forEach(function (product) {
            var productDiv = document.createElement('div');
            var figure = document.createElement('figure');
            var image = document.createElement('img');
            image.setAttribute('src', product.image);
            image.setAttribute('alt', product.title);
            image.setAttribute('width', '200px');
            image.setAttribute('height', '200px');
            var caption = document.createElement('figcaption');
            caption.appendChild(document.createTextNode(product.title + '\n'));
            var ratingLabel = document.createElement('label');
            ratingLabel.setAttribute('class', 'ratingLabel');
            ratingLabel.appendChild(document.createTextNode(product.rating));
            caption.appendChild(ratingLabel);
            var finalPrice = '₹' + product.price.final_price;
            caption.appendChild(document.createTextNode('\n' + finalPrice + '  '));
            var mrp = '₹' + (product.price.mrp || product.price.final_price * (1 - product.discount));
            var mrplabel = document.createElement('label');
            mrplabel.setAttribute('class', 'mrpLabel');
            mrplabel.appendChild(document.createTextNode(mrp));
            caption.appendChild(mrplabel);
            caption.appendChild(document.createTextNode('  ' + product.discount + '% off'));
            figure.appendChild(image);
            figure.appendChild(caption);
            productDiv.appendChild(figure);
            productsList.appendChild(productDiv);
        });
    }

    function renderColorFilters(colorFilter) {
        var colorFilterDiv = document.getElementById('colorFilterDiv');
        colorFilter.forEach(function (colorFilter) {
            var checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            checkbox.name = "color";
            checkbox.value = colorFilter.color;
            var label = document.createElement('label');
            label.appendChild(document.createTextNode(colorFilter.title));
            var colorBox = document.createElement('div');
            colorBox.appendChild(checkbox);
            colorBox.appendChild(label);
            colorFilterDiv.appendChild(colorBox);
        });
    }

    document.getElementById('filters').addEventListener('click', function (event) {
        sort(event);
    });

    function sort(event) {
        if (event.target.innerText.toLowerCase() === "relevance") {
            renderProducts(relevantProducts);
        } else if (event.target.innerText.toLowerCase() === "price - low to high") {
            sortByIncreasingPrice();
            renderProducts(clonedProducts);
        } else if (event.target.innerText.toLowerCase() === "price - high to low") {
            sortByDecreasingPrice();
            renderProducts(clonedProducts);
        }
    }

    function sortByIncreasingPrice() {
        clonedProducts.sort(function (a, b) {
            return a.price.final_price - b.price.final_price;
        });
    };
    function sortByDecreasingPrice() {
        clonedProducts.sort(function (a, b) {
            return b.price.final_price - a.price.final_price;
        });
    };

    document.getElementById('colorFilterDiv').addEventListener('click', function (event) {
        var checkedBoxesList = [];
        Array.from(this.children).forEach(function (div) {
            Array.from(div.children).forEach(function (elem) {
                if (elem.checked) {
                    checkedBoxesList.push(elem);
                }
            });
        });
        checkedBoxesList = checkedBoxesList.map(function (cb) {
            return cb.attributes.value.nodeValue
        });
        var filterProducts = clonedProducts.filter(function (product) {
            return (checkedBoxesList.indexOf(product.colour.color) > -1);
        });
        if(checkedBoxesList.length){
            renderProducts(filterProducts, 'filter');
        } else {
            renderProducts(relevantProducts, 'filter');
        }
    });

    document.getElementById('')
})();















/*


const dataApi = "http://demo1853299.mockable.io/products";
const filterApi = "http://demo1853299.mockable.io/filters";




(function getProducts() {
    fetch(dataApi)
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            products = response;
            window.relevantProducts = JSON.parse(JSON.stringify(products.products));
            renderProducts(products);
        });
    getFilterData();
})();

function getFilterData() {

    fetch(filterApi)
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            var filterData = response;
            window.filterData = filterData.filters;
            var colorFilters = filterData.filters.reduce(function (colorFilter, filter) {
                    if (filter.type === "COLOUR") {
                        colorFilter = filter.values;
                    }
                    return colorFilter;
                }, []);
                renderColorFilters(colorFilters);
        });
}

function renderProducts(productsResp, keyword) {
    if (keyword === "filter") {
        products = productsResp;
    } else {
        var products;
        if (window.products) {
            products = window.products;
        } else {
            products = productsResp.products;
            window.products = products;
        }
    }
    var productsList = document.getElementById('productsList');
    productsList.innerHTML = "";
    products = products.products || products;
    products.forEach(function (product) {
        var productDiv = document.createElement('div');
        var figure = document.createElement('figure');
        var image = document.createElement('img');
        image.setAttribute('src', product.image);
        image.setAttribute('alt', product.title);
        image.setAttribute('width', '200px');
        image.setAttribute('height', '200px');
        var caption = document.createElement('figcaption');
        caption.appendChild(document.createTextNode(product.title + '\n'));
        var ratingLabel = document.createElement('label');
        ratingLabel.setAttribute('class', 'ratingLabel');
        ratingLabel.appendChild(document.createTextNode(product.rating));
        caption.appendChild(ratingLabel);
        var finalPrice = '₹' + product.price.final_price;
        caption.appendChild(document.createTextNode('\n' + finalPrice + '  '));
        var mrp = '₹' + (product.price.mrp || product.price.final_price * (1 - product.discount));
        var mrplabel = document.createElement('label');
        mrplabel.setAttribute('class', 'mrpLabel');
        mrplabel.appendChild(document.createTextNode(mrp));
        caption.appendChild(mrplabel);
        caption.appendChild(document.createTextNode('  ' + product.discount + '% off'));
        figure.appendChild(image);
        figure.appendChild(caption);
        productDiv.appendChild(figure);
        productsList.appendChild(productDiv);
    });
}

function renderColorFilters(colorFilter) {
    var colorFilterDiv = document.getElementById('colorFilterDiv');
    colorFilter.forEach(function (colorFilter) {
        var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.name = "color";
        checkbox.value = colorFilter.color;
        var label = document.createElement('label');
        label.appendChild(document.createTextNode(colorFilter.title));
        var colorBox = document.createElement('div');
        colorBox.appendChild(checkbox);
        colorBox.appendChild(label);
        colorFilterDiv.appendChild(colorBox);
    });
}
document.getElementById('filters').addEventListener('click', function (event) {
    sort(event);
});

document.getElementById('colorFilterDiv').addEventListener('click', function (event) {
    var checkedBoxesList = [];
    Array.from(this.children).forEach(function (div) {
        Array.from(div.children).forEach(function (elem) {
            if (elem.checked) {
                checkedBoxesList.push(elem);
            }
        });
    });
    checkedBoxesList = checkedBoxesList.map(function (cb) {
        return cb.attributes.value.nodeValue
    });
    var localeProducts = JSON.parse(JSON.stringify(window.products));
    localeProducts = localeProducts.products || products;
    var filterProducts = localeProducts.filter(function (product) {
        return (checkedBoxesList.indexOf(product.colour.color) > -1);
    });
    renderProducts(filterProducts, 'filter');
});
function sort(event) {
    if (event.target.innerText.toLowerCase() === "relevance") {
        sortByRelevance();
    } else if (event.target.innerText.toLowerCase() === "price - low to high") {
        sortByIncreasingPrice();
    } else if (event.target.innerText.toLowerCase() === "price - high to low") {
        sortByDecreasingPrice();
    }
    renderProducts(products);
}
function sortByRelevance() {
    products = window.relevantProducts;
};
function sortByIncreasingPrice() {
    products = products.products || products;
    products.sort(function (a, b) {
        return a.price.final_price - b.price.final_price;
    });
};
function sortByDecreasingPrice() {
    products = products.products || products;
    products.sort(function (a, b) {
        return b.price.final_price - a.price.final_price;
    });
};

function filterProducts() {
    var filterText = document.getElementById('filterBrand').value;
    if (filterText.length >= 3) {
        products = products.filter(function (product) {
            return (product.brand.indexOf(filterText) > -1)
        });
        renderProducts(products);
    }
}
*/