import scrolling from "./modules/scrolling";
import modals from "./modules/modals";
import forms from "./modules/forms";
import checkTextInputs from "./modules/checkTextInputs";
import mask from "./modules/mask";
import changeModalState from "./modules/changeModalState";
import cards from "./modules/cards";
import filter from "./modules/filter";

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


});

