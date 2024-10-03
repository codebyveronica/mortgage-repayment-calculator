const amount = document.querySelector('#amount-txt');
const term = document.querySelector('#term-txt');
const rate = document.querySelector('#rate-txt');
const field = document.querySelector('#radio-field');
const types = document.getElementsByName('type');
const repaymentType = document.querySelector('#repayment');
const interestType = document.querySelector('#interest');
const calculateButton = document.querySelector('#calculate');
const withoutRepaymentsHTML = document.querySelector('.no-repayments');
const repaymentsHTML = document.querySelector('.repayments');
const monthlyRepayHTML = document.querySelector('.monthly-repay');
const totalRepayHTML = document.querySelector('.total-repay');

let amountValue;
let validAmount;
let termValue;

let validTerm;
let rateValue;
let validRate;

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

const checkInputRadio = () => {
    const repaymentParentEl = types[0].parentElement;
    const interestParentEl = types[1].parentElement;

    if(types[0].checked == true) {
        repaymentParentEl.classList.add('checked');
        interestParentEl.classList.remove('checked');
    } else if(types[1].checked == true) {
        interestParentEl.classList.add('checked');
        repaymentParentEl.classList.remove('checked');
    } else {
        repaymentParentEl.classList.remove('checked');
        interestParentEl.classList.remove('checked');
    }
}

const calculateRepayment = (amount, term, rate) => {
    let r = (rate / 100) / 12;
    let m = (r * amount) / (1 - (1 + r) ** (-term * 12))
    let repayment = m.toLocaleString('en-GB', {style: 'currency', currency: 'GBP'});
9
    let totalRepayment = (m * (term * 12)).toLocaleString('en-GB', {style: 'currency', currency: 'GBP'});

    displayRepayments(repayment, totalRepayment);
}

const displayRepayments = (repayment, totalRepayment) => {
    withoutRepaymentsHTML.classList.add('hide');
    repaymentsHTML.classList.remove('hide');

    monthlyRepayHTML.innerHTML = `${repayment}`;
    totalRepayHTML.innerHTML = `${totalRepayment}`;
}

calculateButton.addEventListener('click', (e) => {
    e.preventDefault();

    if(amount.value === '') {
        displayError(amount, 'This field is required');
    } else if (amount.value < 10000) {
        displayError(amount, 'Amount must be greater than 10,000');
    } else {
        resetStyle(amount);
        validAmount = true;
        amountValue = amount.value;
    }

    if(term.value === '') {
        displayError(term, 'This field is required');
    } else if (term.value > 45) {
        displayError(term, 'Term cannot be greater than 45');
    } else if (term.value < 1) {
        displayError(term, 'Term cannot be less than 1')
    } else {
        resetStyle(term);
        validTerm = true;
        termValue = term.value;
    }

    if(rate.value === '') {
        displayError(rate, 'This field is required');
    } else if (rate.value > 100) {
        displayError(rate, 'Rate cannot be greater than 100');
    } else if (rate.value < 1) {
        displayError(rate, 'Rate cannot be less than 1');
    } else {
        resetStyle(rate);
        validRate = true;
        rateValue = rate.value;
    }

    if(types[0].checked == false && types[1].checked == false) {
        const errorMessage = field.querySelector('span');
        errorMessage.innerHTML = 'This field is required';
    } else {
        const errorMessage = field.querySelector('span');
        errorMessage.innerHTML = '';
    }

    if(validAmount && validTerm && validRate) {
        calculateRepayment(amountValue, termValue, rateValue);
    }
});

types.forEach(type => {
    type.addEventListener('click', (e) => {
        checkInputRadio();
    })
})