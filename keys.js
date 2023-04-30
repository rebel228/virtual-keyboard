const keysList = [
    {
        "key": "`",
        "keyUpper": "~",
        "keyRu": "ё",
        "keyRu-upper": "`",
        "classes": ["key", "letter", "Backquote"],
    },
    {
        "key": "1",
        "keyUpper": "!",
        "classes": ["key", "num", "Digit1"],
    },
    {
        "key": "2",
        "keyUpper": "@",
        "classes": ["key", "num", "Digit2"],
    },
    {
        "key": "3",
        "keyUpper": "#",
        "classes": ["key", "num", "Digit3"],
    },
    {
        "key": "4",
        "keyUpper": "$",
        "classes": ["key", "num", "Digit4"],
    },
    {
        "key": "5",
        "keyUpper": "%",
        "classes": ["key", "num", "Digit5"],
    },
    {
        "key": "6",
        "keyUpper": "^",
        "classes": ["key", "num", "Digit6"],
    },
    {
        "key": "7",
        "keyUpper": "&",
        "classes": ["key", "num", "Digit7"],
    },
    {
        "key": "8",
        "keyUpper": "*",
        "classes": ["key", "num", "Digit8"],
    },
    {
        "key": "9",
        "keyUpper": "(",
        "classes": ["key", "num", "Digit9"],
    },
    {
        "key": "0",
        "keyUpper": ")",
        "classes": ["key", "num", "Digit0"],
    },
    {
        "key": "-",
        "keyUpper": "_",
        "classes": ["key", "num", "Minus"],
    },
    {
        "key": "=",
        "keyUpper": "+",
        "classes": ["key", "num", "Equal"],
    },
    {
        "key": "Backspace",
        "classes": ["key", "backspace", "Backspace"],
    },
    {
        "key": "Tab",
        "classes": ["key", "tab", "Tab"],
    },
    {
        "key": "q",
        "keyUpper": "Q",
        "keyRu": "й",
        "keyRu-upper": "Й",
        "classes": ["key", "letter", "KeyQ"],
    },
    {
        "key": "w",
        "keyUpper": "W",
        "keyRu": "ц",
        "keyRu-upper": "Ц",
        "classes": ["key", "letter", "KeyW"],
    },
    {
        "key": "e",
        "keyUpper": "E",
        "keyRu": "У",
        "keyRu-upper": "У",
        "classes": ["key", "letter", "KeyE"],
    },
    {
        "key": "r",
        "keyUpper": "R",
        "keyRu": "к",
        "keyRu-upper": "К",
        "classes": ["key", "letter", "KeyR"],
    },
    {
        "key": "t",
        "keyUpper": "T",
        "keyRu": "е",
        "keyRu-upper": "Е",
        "classes": ["key", "letter", "KeyT"],
    },
    {
        "key": "y",
        "keyUpper": "Y",
        "keyRu": "н",
        "keyRu-upper": "Н",
        "classes": ["key", "letter", "KeyY"],
    },
    {
        "key": "u",
        "keyUpper": "U",
        "keyRu": "г",
        "keyRu-upper": "Г",
        "classes": ["key", "letter", "KeyU"],
    },
    {
        "key": "i",
        "keyUpper": "I",
        "keyRu": "ш",
        "keyRu-upper": "Ш",
        "classes": ["key", "letter", "KeyI"],
    },
    {
        "key": "o",
        "keyUpper": "O",
        "keyRu": "щ",
        "keyRu-upper": "Щ",
        "classes": ["key", "letter", "KeyO"],
    },
    {
        "key": "p",
        "keyUpper": "P",
        "keyRu": "з",
        "keyRu-upper": "З",
        "classes": ["key", "letter", "KeyP"],
    },
    {
        "key": "[",
        "keyUpper": "{",
        "keyRu": "х",
        "keyRu-upper": "Х",
        "classes": ["key", "letter", "BracketLeft"],
    },
    {
        "key": "]",
        "keyUpper": "}",
        "keyRu": "ъ",
        "keyRu-upper": "Ъ",
        "classes": ["key", "letter", "BracketRight"],
    },
    {
        "key": '\\',
        "keyUpper": "|",
        "keyRu": "\\",
        "keyRu-upper": "|",
        "classes": ["key", "letter", "Backslash"],
    },
    {
        "key": "del",
        "classes": ["key", "del", "Delete"],
    },
    {
        "key": "Caps Lock",
        "classes": ["key", "caps-lock", "CapsLock"],
    },
    {
        "key": "a",
        "keyUpper": "A",
        "keyRu": "ф",
        "keyRu-upper": "Ф",
        "classes": ["key", "letter", "KeyA"],
    },
    {
        "key": "s",
        "keyUpper": "S",
        "keyRu": "ы",
        "keyRu-upper": "Ы",
        "classes": ["key", "letter", "KeyS"],
    },
    {
        "key": "d",
        "keyUpper": "D",
        "keyRu": "в",
        "keyRu-upper": "В",
        "classes": ["key", "letter", "KeyD"],
    },
    {
        "key": "f",
        "keyUpper": "F",
        "keyRu": "а",
        "keyRu-upper": "А",
        "classes": ["key", "letter", "KeyF"],
    },
    {
        "key": "g",
        "keyUpper": "G",
        "keyRu": "п",
        "keyRu-upper": "П",
        "classes": ["key", "letter", "KeyG"],
    },
    {
        "key": "h",
        "keyUpper": "H",
        "keyRu": "р",
        "keyRu-upper": "Р",
        "classes": ["key", "letter", "KeyH"],
    },
    {
        "key": "j",
        "keyUpper": "J",
        "keyRu": "о",
        "keyRu-upper": "О",
        "classes": ["key", "letter", "KeyJ"],
    },
    {
        "key": "k",
        "keyUpper": "K",
        "keyRu": "л",
        "keyRu-upper": "Л",
        "classes": ["key", "letter", "KeyK"],
    },
    {
        "key": "l",
        "keyUpper": "L",
        "keyRu": "д",
        "keyRu-upper": "Д",
        "classes": ["key", "letter", "KeyL"],
    },
    {
        "key": ";",
        "keyUpper": ":",
        "keyRu": "ж",
        "keyRu-upper": "Ж",
        "classes": ["key", "letter", "Semicolon"],
    },
    {
        "key": "'",
        "keyUpper": '"',
        "keyRu": "э",
        "keyRu-upper": "Э",
        "classes": ["key", "letter", "Quote"],
    },
    {
        "key": "Enter",
        "classes": ["key", "enter", "Enter"],
    },
    {
        "key": "Shift",
        "classes": ["key", "shift", "ShiftLeft"],
    },
    {
        "key": "z",
        "keyUpper": "Z",
        "keyRu": "я",
        "keyRu-upper": "Я",
        "classes": ["key", "letter", "KeyZ"],
    },
    {
        "key": "x",
        "keyUpper": "X",
        "keyRu": "ч",
        "keyRu-upper": "Ч",
        "classes": ["key", "letter", "KeyX"],
    },
    {
        "key": "c",
        "keyUpper": "C",
        "keyRu": "с",
        "keyRu-upper": "С",
        "classes": ["key", "letter", "KeyC"],
    },
    {
        "key": "v",
        "keyUpper": "V",
        "keyRu": "м",
        "keyRu-upper": "М",
        "classes": ["key", "letter", "KeyV"],
    },
    {
        "key": "b",
        "keyUpper": "B",
        "keyRu": "и",
        "keyRu-upper": "И",
        "classes": ["key", "letter", "KeyB"],
    },
    {
        "key": "n",
        "keyUpper": "N",
        "keyRu": "т",
        "keyRu-upper": "Т",
        "classes": ["key", "letter", "KeyN"],
    },
    {
        "key": "m",
        "keyUpper": "M",
        "keyRu": "ь",
        "keyRu-upper": "Ь",
        "classes": ["key", "letter", "KeyM"],
    },
    {
        "key": ",",
        "keyUpper": "<",
        "keyRu": "б",
        "keyRu-upper": "Б",
        "classes": ["key", "letter", "Comma"],
    },
    {
        "key": ".",
        "keyUpper": ">",
        "keyRu": "ю",
        "keyRu-upper": "Ю",
        "classes": ["key", "letter", "Period"],
    },
    {
        "key": "/",
        "keyUpper": '?',
        "keyRu": ".",
        "keyRu-upper": ",",
        "classes": ["key", "letter", "Slash"],
    },
    {
        "key": "\u2191",
        "classes": ["key", "arrow", "ArrowUp"],
    },
    {
        "key": "Shift",
        "classes": ["key", "shift", "ShiftRight"],
    },
    {
        "key": "Ctrl",
        "classes": ["key", "lctrl", "ControlLeft"],
    },
    {
        "key": "Win",
        "classes": ["key", "win", "MetaLeft"],
    },
    {
        "key": "Alt",
        "classes": ["key", "lalt", "AltLeft"],
    },
    {
        "key": "",
        "classes": ["key", "space", "Space"],
    },
    {
        "key": "Alt",
        "classes": ["key", "ralt", "AltRight"],
    },
    {
        "key": "\u2190",
        "classes": ["key", "arrow", "ArrowLeft"],
    },
    {
        "key": "\u2193",
        "classes": ["key", "arrow", "ArrowDown"],
    },
    {
        "key": "\u2192",
        "classes": ["key", "arrow", "ArrowRight"],
    },
    {
        "key": "Ctrl",
        "classes": ["key", "rctrl", "ControlRight"],
    },
]
export default keysList;