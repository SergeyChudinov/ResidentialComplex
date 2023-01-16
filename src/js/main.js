import scrolling from "./modules/scrolling";
import modals from "./modules/modals";
import forms from "./modules/forms";
import checkTextInputs from "./modules/checkTextInputs";
import mask from "./modules/mask";
import changeModalState from "./modules/changeModalState";
import cards from "./modules/cards";
import filter from "./modules/filter";
import options from "./modules/options";
import inputValue from "./modules/inputValue";

import foo from "./modules/inputRange";

window.addEventListener('DOMContentLoaded', () => {
    "use strict";
    let modalState = {};


    changeModalState(modalState);
    scrolling('.pageup');
    modals();
    forms(modalState);
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');
    mask('[name="phone"]');
    foo();
    cards();
    filter();
    options();
    inputValue();



    for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
        e.style.setProperty('--value', e.value);
        e.style.setProperty('--min', e.min == '' ? '0' : e.min);
        e.style.setProperty('--max', e.max == '' ? '100' : e.max);
        e.addEventListener('input', () => e.style.setProperty('--value', e.value));
      }
});

