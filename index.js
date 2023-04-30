import keysList from "/keys.js";

const keyboard = createComponent('section', 'keyboard');
const field = createComponent('textarea', 'field');

document.body.append(field);
document.body.append(keyboard);

for (let key of keysList) {
    keyboard.append(createElement('div', key.classes, key.key));
}

const keys = document.querySelectorAll('.key');
const letters = document.querySelectorAll('.letter');
const numbers = document.querySelectorAll('.num');
const arrows = document.querySelectorAll('.arrow');
const cursorPosition = document.querySelector('.field');

const CAPSLOCK = document.querySelector('.CapsLock');
const LSHIFT = document.querySelector('.ShiftLeft');
const RSHIFT = document.querySelector('.ShiftRight');
const LCTRL = document.querySelector('.ControlLeft');
const RCTRL = document.querySelector('.ControlRight');
const LALT = document.querySelector('.AltLeft');
const RALT = document.querySelector('.AltRight');
const DELETE = document.querySelector('.Delete');
const BACKSPACE = document.querySelector('.Backspace');
const TAB = document.querySelector('.Tab');
const ENTER = document.querySelector('.Enter');
const WIN = document.querySelector('.MetaLeft');
const SPACE = document.querySelector('.Space');

const keyboardKeys = [];
let language = 'en';
let upperCase = false;
let numbersCase = false;
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

function getKeyCode (key) {
    if (key.classList[key.classList.length-1] === 'active') return key.classList[key.classList.length-2];
    else return key.classList[key.classList.length-1];
}

function handleMouseClick (event) {
    event.preventDefault();
    const key = event.target;

    let code = getKeyCode(key);
    console.log(code);

    handleKeyByCode(key, code, false);

    if (code !== 'CapsLock') {
        document.addEventListener('mouseup', (e) => {
            event.target.classList.remove('active');
        }, {once: true})
    }
}

function handleKeyPress (event) {
    if (!keyboardKeys.includes(event.code)) return;

    event.preventDefault();
    const key = document.querySelector(`.${event.code}`);
    let code = event.code;

    handleKeyByCode(key, code, true);
}

function handleKeyByCode (key, code, triggeredByKeyboard) {
    if (code !== 'CapsLock') key.classList.add('active');

    if (key.classList.contains('letter') || key.classList.contains('num') || key.classList.contains('arrow')) typeCharacter(key.innerText);

    if (code == 'CapsLock') {
        toggleCaps(triggeredByKeyboard);
    }

    if (code === 'ShiftRight' || code === 'ShiftLeft') {
        toggleShift(triggeredByKeyboard);
    }

    if (code === 'Tab') typeCharacter('\t');

    if (code === 'Enter') typeCharacter('\n');

    if (code === 'Space') typeCharacter(' ');

    if (code === 'Backspace') {
        if (cursorPosition.selectionStart == cursorPosition.selectionEnd) {
            cursorPosition.setRangeText('', cursorPosition.selectionStart - 1, cursorPosition.selectionEnd, "end");
        }
        else typeCharacter('');
    }
    if (code === 'Delete') {
        if (cursorPosition.selectionStart == cursorPosition.selectionEnd) {
            cursorPosition.setRangeText('', cursorPosition.selectionStart, cursorPosition.selectionEnd + 1, "end");
        }
        else typeCharacter('');
    }
}

function handleKeyRelease (event) {
        const releasedKey = document.querySelector(`.${event.code}`)
        if (event.code !== 'CapsLock') releasedKey.classList.remove('active');
        if (event.code === 'ShiftRight' || event.code === 'ShiftLeft') {
            toggleUpperCase();
            toggleNumbersCase();
        }
        console.log(event.code);
}

function toggleCaps (triggeredByKeyboard = false) {
    if (!triggeredByKeyboard) {
        CAPSLOCK.classList.toggle('active');
        toggleUpperCase();
    }
    else if (!capsLockHeld) {
        console.log('held');
        capsLockHeld = true;
        document.addEventListener('keyup', (e) => {
            if (e.code === 'CapsLock') {
                capsLockHeld = false;
                console.log('released');
            }
        }, {once: true});
        CAPSLOCK.classList.toggle('active');
        toggleUpperCase();
    }
}

function toggleShift (triggeredByKeyboard = false) {
    if (!triggeredByKeyboard) {
        toggleUpperCase();
        toggleNumbersCase();
        document.addEventListener('mouseup', (e) => {
           toggleUpperCase();
           toggleNumbersCase();
        }, {once: true})
    }
    else if (!shiftHeld) {
        shiftHeld = true;
        toggleUpperCase();
        toggleNumbersCase();
        document.addEventListener('keyup', (e) => {
            if (e.code === 'ShiftRight' || e.code === 'ShiftLeft') {
                shiftHeld = false;
            }
        }, {once: true});
    }
}

function toggleUpperCase () {
    letters.forEach (key => {
        let code = getKeyCode(key);

        if (!upperCase) key.innerText = keysList.find(element => element.classes[element.classes.length-1] === code).keyUpper;
        else key.innerText = keysList.find(element => element.classes[element.classes.length-1] === code).key;
    })
    if (upperCase) upperCase = false;
    else upperCase = true;
}

function toggleNumbersCase () {
    numbers.forEach (key => {
        let code = getKeyCode(key);

        if (!numbersCase) key.innerText = keysList.find(element => element.classes[element.classes.length-1] === code).keyUpper;
        else key.innerText = keysList.find(element => element.classes[element.classes.length-1] === code).key;
    })
    if (numbersCase) numbersCase = false;
    else numbersCase = true;
}

for (let key of keysList) {
    keyboardKeys.push(key.classes.slice(-1).toString());
}

keys.forEach(key => {
    key.addEventListener('mousedown', handleMouseClick);
});

document.addEventListener('keydown', handleKeyPress);
document.addEventListener('keyup', handleKeyRelease);