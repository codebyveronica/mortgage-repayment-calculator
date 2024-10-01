const amount = document.querySelector('#amount-txt');
const term = document.querySelector('#term-txt');
const rate = document.querySelector('#rate-txt');

const calculateButton = document.querySelector('#calculate');

const displayErrorStyle = (input) => {
    const parentEl = input.parentElement;
    parentEl.style.borderColor = '#d73328';

    const label = parentEl.querySelector('label');
    label.classList.add('error');
}

const displayError = (input, message) => {
    displayErrorStyle(input);

    const field = input.parentElement.parentElement;
    const errorMessage = field.querySelector('span');
    errorMessage.innerHTML = message;
}

const resetStyle = (input) => {
    const parentEl = input.parentElement;
    parentEl.style.borderColor = '#4e6e7e';

    const field = parentEl.parentElement;
    const label = field.querySelector('label');
    label.classList.remove('error');

    const errorMessage = field.querySelector('span');
    errorMessage.innerHTML = '';
}

calculateButton.addEventListener('click', (e) => {
    e.preventDefault();

    if(amount.value === '') {
        displayError(amount, 'This field is required');
    } else if (amount.value < 10000) {
        displayError(amount, 'Amount must be greater than 10,000');
    } else {
        resetStyle(amount);
    }

    if(term.value === '') {
        displayError(term, 'This field is required');
    } else if (term.value > 45) {
        displayError(term, 'Term cannot be greater than 45');
    } else if (term.value < 1) {
        displayError(term, 'Term cannot be less than 1')
    } else {
        resetStyle(term);
    }

    if(rate.value == '') {
        displayError(rate, 'This field is required');
    } else if (rate.value > 100) {
        displayError(rate, 'Rate cannot be greater than 100');
    } else if (rate.value < 1) {
        displayError(rate, 'Rate cannot be less than 1');
    } else {
        resetStyle(rate);
    }
});

// make the input radio style change when checked and validation