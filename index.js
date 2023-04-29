import keysList from "/keys.js";

const keyboard = createComponent();

function createComponent() {
    const component = document.createElement('section');
    component.classList.add('keyboard');

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

document.body.append(keyboard);

for (let i = 0; i < keysList.length; i++) {
    keyboard.append(createElement('div', keysList[i].classes, keysList[i].key));
}