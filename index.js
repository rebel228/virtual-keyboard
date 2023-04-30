import keysList from "/keys.js";

const keyboard = createComponent('section', 'keyboard');
const field = createComponent('textarea', 'field');
let language = 'en';
let upperCase = false;
let capsLockHeld = false;
let shiftHeld = false;

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
    event.target.classList.add('active');
    console.log(event.target);
    document.addEventListener('mouseup', (e) => {
        event.target.classList.remove('active');
    })
}

function handleKeyPress (event) {
    if (!keyboardKeys.includes(event.code)) return;

    event.preventDefault();
    const key = document.querySelector(`.${event.code}`);

    if (event.code !== 'CapsLock') key.classList.add('active');

    if (key.classList.contains('letter') || key.classList.contains('num') || key.classList.contains('arrow')) typeCharacter(key.innerText);

    if (event.code == 'CapsLock') {
        if (!capsLockHeld) {
            console.log('held');
            capsLockHeld = true;
            toggleCaps(key);
            document.addEventListener('keyup', (e) => {
                if (e.code === 'CapsLock') {
                    capsLockHeld = false;
                    console.log('released');
                }
            }, {once: true});
        }
    }

    if (event.code === 'ShiftRight' || event.code === 'ShiftLeft') {
        if (!shiftHeld) {
            shiftHeld = true;
            toggleUpperCase();
            document.addEventListener('keyup', (e) => {
                if (e.code === 'ShiftRight' || e.code === 'ShiftLeft') {
                    shiftHeld = false;
                }
            }, {once: true});
        }
    }
}

function handleKeyRelease (event) {
        const releasedKey = document.querySelector(`.${event.code}`)
        if (event.code !== 'CapsLock') releasedKey.classList.remove('active');
        if (event.code === 'ShiftRight' || event.code === 'ShiftLeft') toggleUpperCase();
        console.log(event.code);
}

function toggleCaps (caps) {
    caps.classList.toggle('active');
    toggleUpperCase();
}

function toggleUpperCase () {
    letters.forEach (key => {
        let code = '';
        if (key.classList[key.classList.length-1] === 'active') code = code.classList[key.classList.length-2];
        else code = key.classList[key.classList.length-1];

        if (!upperCase) key.innerText = keysList.find(element => element.classes[element.classes.length-1] === code).keyUpper;
        else key.innerText = keysList.find(element => element.classes[element.classes.length-1] === code).key;
    })
    if (upperCase) upperCase = false;
    else upperCase = true;
}

document.body.append(field);
document.body.append(keyboard);

for (let i = 0; i < keysList.length; i++) {
    keyboard.append(createElement('div', keysList[i].classes, keysList[i].key));
}

const letters = document.querySelectorAll('.letter');
const numbers = document.querySelectorAll('.num');
const arrows = document.querySelectorAll('.arrow');
const cursorPosition = document.querySelector('.field');
const keyboardKeys = [];

for (let i = 0; i < keysList.length; i++) {
    keyboardKeys.push(keysList[i].classes.slice(-1).toString());
}



letters.forEach(key => {
    key.addEventListener('mousedown', typeByMouse);
});

numbers.forEach(key => {
    key.addEventListener('mousedown', typeByMouse);
});

arrows.forEach(key => {
    key.addEventListener('mousedown', typeByMouse);
});

document.addEventListener('keydown', handleKeyPress);
document.addEventListener('keyup', handleKeyRelease);

console.log(letters);
console.log(numbers);
console.log(keyboardKeys);

function  logKey (e) {
    console.log(e);
}

