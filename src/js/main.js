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
import calc from "./modules/calc";

import {
  foo,
  inputRange
} from "./modules/inputRange";

const banks = [{
    name: 'Сбербанк',
    interestRate: 6.7
  },
  {
    name: 'Дом.РФ',
    interestRate: 6.8
  },
  {
    name: 'Абсолют банк',
    interestRate: 6.5
  }
]

window.addEventListener('DOMContentLoaded', () => {
  "use strict";
  let modalState = {};
  let calcState = {};


  changeModalState(modalState, calcState);
  scrolling('.pageup');
  modals();
  forms(modalState, calcState);
  checkTextInputs('[name="name"]');
  checkTextInputs('[name="message"]');
  mask('[name="phone"]');
  foo();
  inputRange();
  cards();
  filter();
  options(banks);
  inputValue(inputRange, () => calc(calcState, banks));
  calc(calcState, banks);



});