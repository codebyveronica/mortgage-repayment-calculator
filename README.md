# Frontend Mentor - Mortgage repayment calculator solution

This is a solution to the [Mortgage repayment calculator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/mortgage-repayment-calculator-Galx1LXK73). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Input mortgage information and see monthly repayment and total repayment amounts after submitting the form
- See form validation messages if any field is incomplete
- Complete the form only using their keyboard
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./images/screenshot/desktop.png)
![](./images/screenshot/desktop-validation.png)
![](./images/screenshot/mobile.png)
![](./images/screenshot/mobile-validation.png)

### Links

- Solution URL: [Link](https://github.com/codebyveronica/mortgage-repayment-calculator)
- Live Site URL: [Link](https://codebyveronica.github.io/mortgage-repayment-calculator/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript

### What I learned

I had the opportunity to really practice my skills with form validation and updating the DOM with Java Script, it was a great project to practice both and also to practice CSS. I also learned how to make JavaScript code more organized by placing blocks of code that were used more than once into functions.

Some code I'm proud of:
```js
const calculateRepayment = (amount, term, rate) => {
    let r = (rate / 100) / 12;
    let m = (r * amount) / (1 - (1 + r) ** (-term * 12))
    let repayment = m.toLocaleString('en-GB', {style: 'currency', currency: 'GBP'});

    let totalRepayment = (m * (term * 12)).toLocaleString('en-GB', {style: 'currency', currency: 'GBP'});

    displayRepayments(repayment, totalRepayment);
}
```
It was fun learning about mortgage calculation and putting that formula into JS.

### Continued development

I intend to continue learning and practicing JavaScript and all its features: updating the DOM, populating the DOM dynamically with JSON files and APIs, and also learning about the APIs to use them. And in the meantime, continue improving my HTML and CSS skills.

### Useful resources

- [W3Schools](https://www.w3schools.com) - Is a great source for research on HTML tags, CSS properties, and JavaScript. I'd recommend it to anyone still learning.
- [MDN Webd Docs](https://developer.mozilla.org) - The same as W3Schools, but with more details and examples. Great for those who need more clarification on the subject to learn.


## Author

- Frontend Mentor - [@codebyveronica](https://www.frontendmentor.io/profile/codebyveronica)
