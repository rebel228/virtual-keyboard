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

function typeCharacter (value) {
    cursorPosition.focus;
    cursorPosition.setRangeText(value, cursorPosition.selectionStart, cursorPosition.selectionEnd, "end");
}

function typeByMouse (event) {
    event.preventDefault();
    typeCharacter(event.target.innerText);
}

function typeByKeyboard (event) {
    event.preventDefault();
    const key = document.querySelector(`.${event.code}`);
    if (key.classList.contains('letter') || key.classList.contains('num')) typeCharacter(key.innerText);
    console.log(key);
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
    key.addEventListener('mousedown', typeByMouse);
});

numbers.forEach(key => {
    key.addEventListener('click', typeByMouse);
});

document.addEventListener('keydown', typeByKeyboard);

console.log(letters);
console.log(numbers);

function  logKey (e) {
    console.log(e);
}

