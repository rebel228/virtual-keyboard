import keysList from './keys.js';

function createElement(tagName, classes, innerText) {
  const element = document.createElement(tagName);
  for (let i = 0; i < classes.length; i += 1) {
    element.classList.add(classes[i]);
  }
  if (innerText) element.innerText = innerText;
  return element;
}

const keyboard = createElement('section', ['keyboard']);
const field = createElement('textarea', ['field']);
const title = createElement('h1', ['title'], 'Virtual keyboard');
const textLanguage = createElement('p', ['text'], 'To change language use: Ctrl + Alt');
const textOs = createElement('p', ['text'], 'Keyboard is made using Windows OS');
let lang = 'en';

window.addEventListener('beforeunload', () => {
  localStorage.setItem('language', lang);
});
window.addEventListener('load', () => {
  if (localStorage.getItem('language')) lang = localStorage.getItem('language');
});

document.body.append(title);
document.body.append(field);
document.body.append(keyboard);
document.body.append(textLanguage);
document.body.append(textOs);

for (let i = 0; i < keysList.length; i += 1) {
  keyboard.append(createElement('div', keysList[i].classes, keysList[i].key));
}

const keys = document.querySelectorAll('.key');
const letters = document.querySelectorAll('.letter');
const numbers = document.querySelectorAll('.num');
const textArea = document.querySelector('.field');
const CAPSLOCK = document.querySelector('.CapsLock');
const keyboardKeys = [];
const keyboardLetters = [];
let upperCase = false;
let numbersCase = false;
let capsLockHeld = false;
let shiftHeld = false;

function getLanguageLocalStorage() {
  if (localStorage.getItem('language')) lang = localStorage.getItem('language');
}

function typeCharacter(value) {
  textArea.setRangeText(value, textArea.selectionStart, textArea.selectionEnd, 'end');
  textArea.focus();
}

function getKeyCode(key) {
  if (key.classList[key.classList.length - 1] === 'active') return key.classList[key.classList.length - 2];
  return key.classList[key.classList.length - 1];
}

function updateKeys() {
  if (lang === 'ru') {
    for (let i = 0; i < letters.length; i += 1) {
      if (!upperCase) letters[i].innerText = keyboardLetters[i].keyRu;
      else letters[i].innerText = keyboardLetters[i].keyRuUpper;
    }
  }
  if (lang === 'en') {
    for (let i = 0; i < letters.length; i += 1) {
      if (!upperCase) letters[i].innerText = keyboardLetters[i].key;
      else letters[i].innerText = keyboardLetters[i].keyUpper;
    }
  }
}

function toggleLanguage() {
  if (lang === 'en') lang = 'ru';
  else lang = 'en';
  updateKeys();
}

function toggleNumbersCase() {
  numbers.forEach((key) => {
    const code = getKeyCode(key);
    if (!numbersCase) {
      key.innerText = keysList.find((e) => e.classes[e.classes.length - 1] === code).keyUpper;
    } else {
      key.innerText = keysList.find((e) => e.classes[e.classes.length - 1] === code).key;
    }
  });
  if (numbersCase) numbersCase = false;
  else numbersCase = true;
}

function toggleUpperCase() {
  letters.forEach((key) => {
    const code = getKeyCode(key);
    if (lang === 'en') {
      if (!upperCase) {
        key.innerText = keysList.find((e) => e.classes[e.classes.length - 1] === code).keyUpper;
      } else key.innerText = keysList.find((e) => e.classes[e.classes.length - 1] === code).key;
    } else if (!upperCase) {
      key.innerText = keysList.find((e) => e.classes[e.classes.length - 1] === code).keyRuUpper;
    } else {
      key.innerText = keysList.find((e) => e.classes[e.classes.length - 1] === code).keyRu;
    }
  });
  if (upperCase) upperCase = false;
  else upperCase = true;
}

function toggleShift(triggeredByKeyboard = false) {
  if (!triggeredByKeyboard) {
    toggleUpperCase();
    toggleNumbersCase();
    document.addEventListener('mouseup', () => {
      toggleUpperCase();
      toggleNumbersCase();
    }, { once: true });
  } else if (!shiftHeld) {
    shiftHeld = true;
    toggleUpperCase();
    toggleNumbersCase();
    document.addEventListener('keyup', (e) => {
      if (e.code === 'ShiftRight' || e.code === 'ShiftLeft') {
        shiftHeld = false;
      }
    }, { once: true });
  }
}

function toggleCaps(triggeredByKeyboard = false) {
  if (!triggeredByKeyboard) {
    CAPSLOCK.classList.toggle('active');
    toggleUpperCase();
  } else if (!capsLockHeld) {
    capsLockHeld = true;
    document.addEventListener('keyup', (e) => {
      if (e.code === 'CapsLock') {
        capsLockHeld = false;
      }
    }, { once: true });
    CAPSLOCK.classList.toggle('active');
    toggleUpperCase();
  }
}

function handleKeyByCode(key, code, event, triggeredByKeyboard) {
  if (code !== 'CapsLock') key.classList.add('active');

  if (key.classList.contains('letter') || key.classList.contains('num') || key.classList.contains('arrow')) typeCharacter(key.innerText);

  if (code === 'CapsLock') {
    toggleCaps(triggeredByKeyboard);
  }

  if (code === 'ShiftRight' || code === 'ShiftLeft') {
    toggleShift(triggeredByKeyboard);
  }

  if (code === 'Tab') typeCharacter('\t');

  if (code === 'Enter') typeCharacter('\n');

  if (code === 'Space') typeCharacter(' ');

  if (code === 'Backspace') {
    if (textArea.selectionStart === textArea.selectionEnd) {
      if (textArea.selectionStart !== 0) {
        textArea.setRangeText('', textArea.selectionStart - 1, textArea.selectionEnd, 'end');
      }
    } else typeCharacter('');
  }
  if (code === 'Delete') {
    if (textArea.selectionStart === textArea.selectionEnd) {
      textArea.setRangeText('', textArea.selectionStart, textArea.selectionEnd + 1, 'end');
    } else typeCharacter('');
  }
  if (code === 'ControlLeft' || code === 'ControlRight') {
    if (event.altKey) toggleLanguage();
  }
  if (code === 'AltLeft' || code === 'AltRight') {
    if (event.ctrlKey) toggleLanguage();
  }
}

function handleMouseClick(event) {
  event.preventDefault();
  const key = event.target;
  const code = getKeyCode(key);

  handleKeyByCode(key, code, event, false);

  if (code !== 'CapsLock') {
    document.addEventListener('mouseup', () => {
      event.target.classList.remove('active');
    }, { once: true });
  }
}

function handleKeyPress(event) {
  if (!keyboardKeys.includes(event.code)) return;
  event.preventDefault();
  const key = document.querySelector(`.${event.code}`);
  const { code } = event;

  handleKeyByCode(key, code, event, true);
}

function handleKeyRelease(event) {
  const releasedKey = document.querySelector(`.${event.code}`);
  if (event.code !== 'CapsLock') releasedKey.classList.remove('active');
  if (event.code === 'ShiftRight' || event.code === 'ShiftLeft') {
    toggleUpperCase();
    toggleNumbersCase();
  }
}

for (let i = 0; i < keysList.length; i += 1) {
  keyboardKeys.push(keysList[i].classes.slice(-1).toString());
  if (keysList[i].classes.includes('letter')) keyboardLetters.push(keysList[i]);
}

keys.forEach((key) => {
  key.addEventListener('mousedown', handleMouseClick);
});
document.addEventListener('keydown', handleKeyPress);
document.addEventListener('keyup', handleKeyRelease);
getLanguageLocalStorage();
updateKeys();
