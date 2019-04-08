var FK = FK || {};
FK.CreditManagementApp = (function(doc,win){
    
    var app;
    var container;
    var url = 'https://api.myjson.com/bins/fvzpp';
    var currYear = (new Date()).getFullYear() % 100;
    var yy = [];
    var mm = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    var currCard;
    var minLength = 16;
    var allSavedCards = JSON.parse(localStorage.getItem('allSavedCards')  || '[]');
    

    for (var i = 0 ; i < 20; i++) {
        yy.push(currYear + i);
    }

    function init(elem) {
        container = elem;
        fetch(url)
            .then(function(response) {
                return response.json();
            })
            .then(function(response) {
                data = Object.values(response);
                buildApp(container);
            })
            .catch(function(error) {
                app = errorHandler();
                container.appendChild(app);
            });
    }

    function buildApp(container) {
        if(app) {
            container.removeChild(app);
        }
        app = initialize();
        container.appendChild(app);
        attachListeners(container);
    }

    function initialize() {
        var div = doc.createElement('div');
        div.innerHTML = getSuccessTemplate();
        div.className = 'app-wrapper'
        return div;
    }

    function getSuccessTemplate() { 
        return `
            <div class='card-app'>
                <div>Manage Credit Card</div>
                <div class='add-card debug'>
                    <div id='add-new'> + ADD A NEW CARD</div>
                    ${getAddNewCardFormTemplate()} 
                </div>
                <div id='saved-cards'>
                    ${getSavedCards()}
                </div>
            </div>
        `;
    }

    function getAddNewCardFormTemplate() {

        var monthOptions = '<option value="null" disabled>MM</option>',
            yearOptions = '<option value="null" disabled>YY</option>';
        for(var i = 0; i < yy.length; i++) {
            yearOptions += `
                <option value='${yy[i]}'>${yy[i]}</option>
            `;
        }

        for(var i = 0; i < mm.length; i++) {
            monthOptions += `
                <option value='${mm[i]}'>${mm[i]}</option>
            `;
        }

        return `
            <div id='add-new-form'>
                <span>ADD A NEW CARD</span>
                <div class='form-row'>
                    <div>
                        <input type="text" id='card-number' />
                        <span id='card-number-error'>Enter valid card number</span>
                    </div>
                    <div>
                        <select id="month">
                        ${monthOptions}
                        </select>
                        <select id="year">
                            ${yearOptions}
                        </select>
                    </div>
                </div>
                <div class='form-row'>
                    <div>
                        <input type="text" id='card-ccv'/>
                        <span id='card-ccv-error'>Please enter valid CCV.</span>
                    </div>
                    <div>
                        <input type="text" id='card-name'/>
                    </div>
                </div>
                <div>
                    <button id="save">SAVE THIS CARD</button>
                    <input type="reset" id='cancel' value='CANCEL' />
                </div>
                <div>Your card details would be securely saved for faster payments. Your CVV will not be stored</div>
            </div>
        `;
    }

    function getSavedCards() {
        var allSavedCards = JSON.parse(localStorage.getItem('allSavedCards')  || '[]');
        var savedCardsHTML =  '';
        for(var i = 0; i < allSavedCards.length; i++) {
            savedCardsHTML += savedCardsTemplate(allSavedCards[i])
        }
        return savedCardsHTML;
    }


    function savedCardsTemplate (card) {
        return `
            <div id="card-${card.id}">
                <div>
                    <span>${card.name}</span>
                    <span data-id="${card.id}" class="edit-card">EDIT</span>
                    <span data-id="${card.id}" class="delete-card">DELETE</span>
                </div>
                <div>
                    <img /> 
                    <span>${card.card_number}</span>
                </div>
            </div>
        `;
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

    function attachListeners(container) {
        toggleAddCardForm();
        ccvValidation();
        validateCard();
        saveCard();
        deleteListeners();
        editListeners();
    }

    function toggleAddCardForm() {
        var addNewCard = doc.getElementById('add-new');
        var addNewCardForm = doc.getElementById('add-new-form');
        var cancelBtn = doc.getElementById('cancel');
        addNewCard.addEventListener('click', function() {
            addNewCardForm.style.display = 'flex';
            addNewCard.style.display = 'none';
        });
        cancelBtn.addEventListener('mousedown', function(event) {
            reset();
        });
    }

    function reset() {
        var addNewCard = doc.getElementById('add-new');
        var addNewCardForm = doc.getElementById('add-new-form');
        var creditcardError = document.getElementById('card-number-error');
        var cardOwnerError = doc.getElementById('card-ccv-error');

        var cardNumber = doc.getElementById('card-number');
        var cardCCV = doc.getElementById('card-ccv');
        var cardName = doc.getElementById('card-name');
        cardNumber.value = '';
        cardCCV.value = '';
        cardName.value = '';
        addNewCard.style.display = 'flex';
        addNewCardForm.style.display = 'none';
        creditcardError.style.display='none';
        cardOwnerError.style.display = 'none';
        currCard = null;
    }

    function ccvValidation() {
        var cardCCV = doc.getElementById('card-ccv');
        var cardCCVError = doc.getElementById('card-ccv-error');
        cardCCV.addEventListener('blur', function (event) {
            var ccValue = event.target.value.trim();
            if(currCard && currCard.cvv == 'required' && currCard.cvvLength !== ccValue.length) {
                cardCCVError.style.display = 'block';
            }
        });
        cardCCV.addEventListener('focus', function (event) {
            cardCCVError.style.display = 'none';
        })
    }

    function validateCard() {
        var cardNumber = doc.getElementById('card-number');
        var creditcardError = document.getElementById('card-number-error');
        var keyCodeList = [8]; //Backspace
        //48 keyCode of 0
        for(var i = 0 ; i < 10; i++) {
            keyCodeList.push(48 + i)
        }
        cardNumber.addEventListener('keypress', function(event){
            var keyCode  = event.keyCode;
            var value = event.target.value;
            if(keyCodeList.indexOf(keyCode) == -1) {
                event.preventDefault();
                return false;
            } else {
                currCard = null;
                var orgCreditCardNumber = value.replace(/\s/g,'');
                for(var i = 0; i < data.length; i++) {
                    var pattern = data[i].cardPattern.replace(/\//g,'');
                    var result = RegExp(pattern).test(orgCreditCardNumber);
                    if(result) {
                        currCard = data[i];
                    }
                }
                if(currCard && orgCreditCardNumber.length >= currCard.cardNumberLength) {
                    event.preventDefault();
                    return false;
                }
                event.target.value = value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
            }
        });

        cardNumber.addEventListener('blur', function(event) {
            var orgCreditCardNumber = event.target.value.replace(/\s/g,'');
            if(currCard && orgCreditCardNumber.length < currCard.cardNumberLength || 
                (orgCreditCardNumber.length < minLength && orgCreditCardNumber.length  > 0)) {
                creditcardError.style.display = 'block';
            }
        });

        cardNumber.addEventListener('focus', function() {
            creditcardError.style.display = 'none';
        });        
    }

    function saveCard() {
        var cardNumber = doc.getElementById('card-number');
        var cardCCV = doc.getElementById('card-ccv');
        var cardName = doc.getElementById('card-name');
        var year = doc.getElementById('year');
        var month = doc.getElementById('month');
        var saveBtn = doc.getElementById('save');

        saveBtn.addEventListener('click', function() {
            var orgCreditCardNumber = cardNumber.value.replace(/\s/g,'');
            if(currCard && currCard.cardNumberLength == orgCreditCardNumber.length &&
                (currCard.cvv == 'required' && cardCCV.value.length === currCard.cvvLength || currCard.cvv == 'optional') ) {
                    var card = {
                        id: new Date().getTime(),
                        card_number:cardNumber.value,
                        cvv: cardCCV.value,
                        name: cardName.value,
                        year: year.value,
                        month: month.value
                    };
                    allSavedCards.push(card);
                    localStorage.setItem('allSavedCards', JSON.stringify(allSavedCards));
                    reset();
                    buildApp(container);
            }
        })
    }

    function deleteListeners() {
        var cards = doc.getElementsByClassName('delete-card');
        console.log(cards);
        for(var i = 0; i < cards.length; i++) {
            cards[i].addEventListener('click', function(event) {
                var item = event.target.attributes['data-id'].value;
                var cardDOM = doc.getElementById('card-'+item);
                var savedCardsDOM = doc.getElementById('saved-cards');
                savedCardsDOM.removeChild(cardDOM);
            });
        }
    }

    function editListeners() {
        var cards = doc.getElementsByClassName('edit-card');
        for(var i = 0; i < cards.length; i++) {
            cards[i].addEventListener('click', function(event) {
                var item = event.target.attributes['data-id'].value;
                var cardDOM = doc.getElementById('card-'+item);
            });
        }
    }

    return {
        init: init
    };

})(document, window);

var appContainer = document.getElementById("app");
FK.CreditManagementApp.init(appContainer);