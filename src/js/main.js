import scrolling from "./modules/scrolling";
import modals from "./modules/modals";
import forms from "./modules/forms";
import checkTextInputs from "./modules/checkTextInputs";
import mask from "./modules/mask";

window.addEventListener('DOMContentLoaded', () => {
    "use strict";
    let modalState = {};

    scrolling('.pageup');
    modals();
    forms();
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');
    mask('[name="phone"]');
});

