import keysList from "/keys.js";

const keyboard = createComponent('section', 'keyboard');
const field = createComponent('textarea', 'field');

function createComponent(tagName, className) {
    const component = document.createElement(tagName);
    component.classList.add(className);

    return component;
}

function createElement(tagName, classes, innerText) {
    const element = document.createElement(tagName);
    for (let j = 0; j < classes.length; j++) {
        element.classList.add(classes[j]);
    }
    element.innerText = innerText;
    return element;
}

function typeCharacter (event) {
    event.preventDefault();
    cursorPosition.focus;
    cursorPosition.setRangeText(event.target.innerText, cursorPosition.selectionStart, cursorPosition.selectionEnd, "end");
}

document.body.append(field);
document.body.append(keyboard);

for (let i = 0; i < keysList.length; i++) {
    keyboard.append(createElement('div', keysList[i].classes, keysList[i].key));
}

const letters = document.querySelectorAll('.letter');
const numbers = document.querySelectorAll('.num');
const cursorPosition = document.querySelector('.field');

letters.forEach(key => {
    key.addEventListener('mousedown', typeCharacter);
});

numbers.forEach(key => {
    key.addEventListener('click', typeCharacter);
});


console.log(letters);
console.log(numbers);

function  logKey (e) {
    console.log(e);
    console.log(cursorPosition);
}
document.addEventListener('keydown', logKey);
