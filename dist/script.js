/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_scrolling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scrolling */ "./src/js/modules/scrolling.js");
/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modals */ "./src/js/modules/modals.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");
/* harmony import */ var _modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/checkTextInputs */ "./src/js/modules/checkTextInputs.js");
/* harmony import */ var _modules_mask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/mask */ "./src/js/modules/mask.js");
/* harmony import */ var _modules_changeModalState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/changeModalState */ "./src/js/modules/changeModalState.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/cards */ "./src/js/modules/cards.js");
/* harmony import */ var _modules_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/filter */ "./src/js/modules/filter.js");
/* harmony import */ var _modules_options__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/options */ "./src/js/modules/options.js");
/* harmony import */ var _modules_inputValue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/inputValue */ "./src/js/modules/inputValue.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/calc */ "./src/js/modules/calc.js");
/* harmony import */ var _modules_images__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/images */ "./src/js/modules/images.js");
/* harmony import */ var _modules_sliders__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/sliders */ "./src/js/modules/sliders.js");
/* harmony import */ var _modules_inputRange__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/inputRange */ "./src/js/modules/inputRange.js");














const banks = [{
  name: 'Сбербанк',
  interestRate: 0.7
}, {
  name: 'Дом.РФ',
  interestRate: 6.8
}, {
  name: 'Абсолют банк',
  interestRate: 6.5
}];
window.addEventListener('DOMContentLoaded', () => {
  "use strict";

  let modalState = {};
  let calcState = {};
  Object(_modules_changeModalState__WEBPACK_IMPORTED_MODULE_5__["default"])(modalState, calcState);
  Object(_modules_scrolling__WEBPACK_IMPORTED_MODULE_0__["default"])('.pageup');
  Object(_modules_modals__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_modules_forms__WEBPACK_IMPORTED_MODULE_2__["default"])(modalState, calcState);
  Object(_modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_3__["default"])('[name="name"]');
  Object(_modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_3__["default"])('[name="message"]');
  Object(_modules_mask__WEBPACK_IMPORTED_MODULE_4__["default"])('[name="phone"]');
  Object(_modules_inputRange__WEBPACK_IMPORTED_MODULE_13__["foo"])();
  Object(_modules_inputRange__WEBPACK_IMPORTED_MODULE_13__["inputRange"])();
  Object(_modules_cards__WEBPACK_IMPORTED_MODULE_6__["default"])();
  Object(_modules_filter__WEBPACK_IMPORTED_MODULE_7__["default"])();
  // options(banks);
  Object(_modules_inputValue__WEBPACK_IMPORTED_MODULE_9__["default"])(_modules_inputRange__WEBPACK_IMPORTED_MODULE_13__["inputRange"], () => Object(_modules_calc__WEBPACK_IMPORTED_MODULE_10__["default"])(calcState, banks));
  Object(_modules_calc__WEBPACK_IMPORTED_MODULE_10__["default"])(calcState, banks, _modules_inputRange__WEBPACK_IMPORTED_MODULE_13__["inputRange"]);
  Object(_modules_images__WEBPACK_IMPORTED_MODULE_11__["default"])();
  Object(_modules_sliders__WEBPACK_IMPORTED_MODULE_12__["default"])('.slider_container');
});

/***/ }),

/***/ "./src/js/modules/calc.js":
/*!********************************!*\
  !*** ./src/js/modules/calc.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const calc = (state, banks, inputRange) => {
  const bankBlock = document.querySelector('#bank');
  const realEstateValueBlock = document.querySelector('#real_estate_value');
  const anInitialFeeBlock = document.querySelector('#an_initial_fee');
  const creditTermBlock = document.querySelector('#credit_term');
  let amountOfCreditBlock = document.querySelector('.credit_container .bank');
  let selectedBankBlock = document.querySelector('.credit_container .real_estate_value');
  let monthlyPaymentBlock = document.querySelector('.credit_container .an_initial_fee');
  let interestRateBlock = document.querySelector('.credit_container .credit_term');
  let realEstateValue = null; //Стоимость недвижимости
  let anInitialFee = null; //Первоначальный взнос
  let creditTerm = null; //Срок кредита

  const calcFunc = () => {
    const attention = document.querySelector('.attention');

    // selectedBankBlock.textContent = bankBlock.value; // банк

    realEstateValue = realEstateValueBlock.value;
    anInitialFee = anInitialFeeBlock.value;
    const aOCB = (realEstateValue - anInitialFee).toString();
    if (aOCB.length <= 5) {
      // Сумма кредита
      amountOfCreditBlock.classList.add('status');
      amountOfCreditBlock.textContent = `сумма слишком низкая`;
    } else if (aOCB.length === 6) {
      amountOfCreditBlock.textContent = `${aOCB[0]}${aOCB[1]}${aOCB[2]} 000 ₽`;
      amountOfCreditBlock.classList.remove('status');
    } else if (aOCB.length === 7) {
      amountOfCreditBlock.textContent = `${aOCB[0]} ${aOCB[1]}${aOCB[2]}${aOCB[3]} 000 ₽`;
      amountOfCreditBlock.classList.remove('status');
    } else {
      amountOfCreditBlock.textContent = `${aOCB[0]}${aOCB[1]} ${aOCB[2]}${aOCB[3]}${aOCB[4]} 000 ₽`;
      amountOfCreditBlock.classList.remove('status');
    }

    // const bankObj = banks.find(bank => bank.name == bankBlock.value);
    // interestRateBlock.textContent = bankObj.interestRate + ' %'; // % ставка

    const s = realEstateValue - anInitialFee; //1000000
    // const p = (bankObj.interestRate / 1200);  // 0.005583333333333333
    const p = 0.7 / 1200;
    creditTerm = creditTermBlock.value; // 12
    const m = creditTerm * 12;
    const stavka = Math.pow(1 + p, m);
    const sum = Math.round(s * p * stavka / (stavka - 1));
    const sumStr = sum.toString();
    if (sumStr.length <= 3) {
      // Ежемесячный платеж
      monthlyPaymentBlock.classList.add('status');
      monthlyPaymentBlock.textContent = `сумма слишком низкая`;
    } else if (sumStr.length === 4) {
      monthlyPaymentBlock.textContent = `${sumStr[0]} ${sumStr[1]}${sumStr[2]}${sumStr[3]} ₽`;
      monthlyPaymentBlock.classList.remove('status');
    } else if (sumStr.length === 5) {
      monthlyPaymentBlock.textContent = `${sumStr[0]}${sumStr[1]} ${sumStr[2]}${sumStr[3]}${sumStr[4]} ₽`;
      monthlyPaymentBlock.classList.remove('status');
    } else {
      monthlyPaymentBlock.textContent = `${sumStr[0]}${sumStr[1]}${sumStr[2]} ${sumStr[3]}${sumStr[4]}${sumStr[5]} ₽`;
      monthlyPaymentBlock.classList.remove('status');
    }
    if (+aOCB <= 0) {
      amountOfCreditBlock.classList.add('status');
      amountOfCreditBlock.textContent = `некорректное значение`;
      monthlyPaymentBlock.classList.add('status');
      monthlyPaymentBlock.textContent = `некорректное значение`;
      attention.classList.add('error');
      attention.textContent = 'Первоначальный взнос должен быть меньше стоимость недвижимости';
    } else {
      attention.textContent = '';
    }
    state['Ежемесячный платеж'] = sum;
  };

  // bankBlock.addEventListener('change', (e) => {
  //     calcFunc();
  // });
  realEstateValueBlock.addEventListener('input', e => {
    calcFunc();
  });
  anInitialFeeBlock.addEventListener('input', e => {
    calcFunc();
  });
  creditTermBlock.addEventListener('input', e => {
    calcFunc();
  });
  calcFunc();
  document.querySelector('.credit').style.display = 'none';
};
/* harmony default export */ __webpack_exports__["default"] = (calc);

/***/ }),

/***/ "./src/js/modules/cards.js":
/*!*********************************!*\
  !*** ./src/js/modules/cards.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const apartmentCards = [{
  title: 'Студия',
  area: '57,4',
  img: './assets/img/studio_flat_1.png',
  className: 'studio'
}, {
  title: 'Студия',
  area: '57,4',
  img: './assets/img/studio_flat_2.png',
  className: 'studio'
}, {
  title: 'Студия',
  area: '57,4',
  img: './assets/img/studio_flat_3.png',
  className: 'studio'
}, {
  title: 'Однокомнатная',
  area: '57,4',
  img: '../assets/img/one_room_flat_1.png',
  className: 'one_rorm_flat'
}, {
  title: 'Однокомнатная',
  area: '57,4',
  img: './assets/img/one_room_flat_2.png',
  className: 'one_rorm_flat'
}, {
  title: 'Двухкомнатная',
  area: '57,4',
  img: './assets/img/two_roomed_flat_1.png',
  className: 'two_rorm_flat'
}, {
  title: 'Двухкомнатная',
  area: '57,4',
  img: './assets/img/two_roomed_flat_2.png',
  className: 'two_rorm_flat'
}, {
  title: 'Трехкомнатная',
  area: '57,4',
  img: './assets/img/three_room_flat_1.png',
  className: 'three_rorm_flat'
}, {
  title: 'Трехкомнатная',
  area: '57,4',
  img: './assets/img/three_room_flat_2.png',
  className: 'three_rorm_flat'
}, {
  title: 'Трехкомнатная',
  area: '57,4',
  img: './assets/img/three_room_flat_3.png',
  className: 'three_rorm_flat'
}];
function cards() {
  const parent = document.querySelector('.apartment_selection_container');
  const render = (title, area, img, className) => {
    const element = document.createElement('div');
    element.classList.add(`apartment_block`);
    element.classList.add(`all`);
    element.classList.add(`${className}`);
    element.innerHTML = `
            <img class="apartment_img" src="${img}" alt="apartment">
            <h1 class="apartment_title">${title}</h1>
            <p class="apartment_text">Площадь — ${area} м²</p>
        `;
    parent.append(element);
  };
  apartmentCards.map(_ref => {
    let {
      title,
      area,
      img,
      className
    } = _ref;
    render(title, area, img, className);
  });
}
/* harmony default export */ __webpack_exports__["default"] = (cards);

/***/ }),

/***/ "./src/js/modules/changeModalState.js":
/*!********************************************!*\
  !*** ./src/js/modules/changeModalState.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const changeModalState = (state, calcState) => {
  const apartments = document.querySelectorAll('.checkbox_apartment');
  const areaFrom = document.querySelectorAll('.input_area_from');
  const areaTo = document.querySelectorAll('.input_area_to');
  const finishing = document.querySelectorAll('.checkbox_finishing');
  const bank = document.querySelectorAll('#bank');
  const realEstateValue = document.querySelectorAll('#real_estate_value');
  const anInitialFee = document.querySelectorAll('#an_initial_fee');
  const creditTerm = document.querySelectorAll('#credit_term');
  const price = document.querySelectorAll('.price');
  const fee = document.querySelectorAll('.fee');
  const term = document.querySelectorAll('.term');
  function bindActionToElems(event, elem, prop) {
    elem.forEach((item, i) => {
      item.addEventListener(event, () => {
        switch (item.nodeName) {
          case 'INPUT':
            if (item.getAttribute('name') === 'checkbox') {
              i === 0 ? state[prop] = 'Черновая' : i === 1 ? state[prop] = 'Предчистовая' : state[prop] = 'Чистовая';
              elem.forEach((box, j) => {
                box.checked = false;
                if (i == j) {
                  box.checked = true;
                }
              });
            } else if (item.getAttribute('type') === 'checkbox') {
              i === 0 ? state[prop] = 'Студия' : i === 1 ? state[prop] = 'Однокомнатная' : i == 2 ? state[prop] = 'Двухкомнатная' : i == 3 ? state[prop] = 'Трехкомнатная' : state[prop] = 'Больше трех комнат';
              elem.forEach((box, j) => {
                box.checked = false;
                if (i == j) {
                  box.checked = true;
                }
              });
            } else {
              if (item.classList.contains('styled-slider') || item.classList.contains('mortgage_input')) {
                calcState[prop] = item.value;
              } else {
                state[prop] = item.value;
              }
            }
            break;
          case 'SELECT':
            calcState[prop] = item.value;
            break;
        }
        // console.log(state);
        // console.log(calcState);
      });
    });
  }

  bindActionToElems('change', apartments, 'тип квартиры');
  bindActionToElems('change', areaFrom, 'площадь от');
  bindActionToElems('change', areaTo, 'площадь до');
  bindActionToElems('change', finishing, 'вариант отделки');
  bindActionToElems('change', bank, 'банк');
  bindActionToElems('change', realEstateValue, 'cтоимость недвижимости');
  bindActionToElems('change', anInitialFee, 'первоначальный взнос');
  bindActionToElems('change', creditTerm, 'срок кредита');
  bindActionToElems('change', price, 'Стоимость недвижимости');
  bindActionToElems('change', fee, 'Первоначальный взнос');
  bindActionToElems('change', term, 'Срок кредита');
};
/* harmony default export */ __webpack_exports__["default"] = (changeModalState);

/***/ }),

/***/ "./src/js/modules/checkTextInputs.js":
/*!*******************************************!*\
  !*** ./src/js/modules/checkTextInputs.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const checkTextInputs = selector => {
  const txtInputs = document.querySelectorAll(selector);
  txtInputs.forEach(input => {
    input.addEventListener('keypress', function (e) {
      if (e.key.match(/[^а-яё 0-9]/ig)) {
        e.preventDefault();
      }
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (checkTextInputs);

/***/ }),

/***/ "./src/js/modules/filter.js":
/*!**********************************!*\
  !*** ./src/js/modules/filter.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const filter = () => {
  const menu = document.querySelector('.apartment_filter_container');
  const items = menu.querySelectorAll('button');
  const wrapper = document.querySelector('.apartment_selection_container');
  menu.addEventListener('click', e => {
    const classList = e.target.classList;
    if (e.target.closest('button')) {
      for (const child of wrapper.children) {
        child.style.display = 'none';
      }
      for (const child of items) {
        child.classList.remove('active');
      }
      for (const child of wrapper.querySelectorAll(`.${classList}`)) {
        child.style.display = 'block';
      }
      menu.querySelector(`.${classList}`).classList.add('active');
    }
  });
};
/* harmony default export */ __webpack_exports__["default"] = (filter);

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const forms = (state, calcState) => {
  const form = document.querySelectorAll('form');
  const inputs = document.querySelectorAll('.input');
  const clearInputs = () => {
    inputs.forEach(item => {
      item.value = '';
    });
  };
  const message = {
    loading: 'Загрузка',
    success: 'Спасибо! Мы с вами саяжемся!',
    failure: 'Что-то пошло не так...'
  };
  const postData = async (url, data) => {
    document.querySelector('.status').textContent = message.loading;
    let res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: data
    });
    return await res.json();
  };
  form.forEach(item => {
    item.addEventListener('submit', e => {
      e.preventDefault();
      let statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      item.appendChild(statusMessage);
      const formData = new FormData(item);
      if (item.getAttribute('data-form') === 'end') {
        console.log('data-form');
        for (let key in state) {
          formData.append(key, state[key]);
        }
      } else if (item.getAttribute('data-calc') === 'end') {
        for (let key in calcState) {
          formData.append(key, calcState[key]);
        }
      }
      const json = JSON.stringify(Object.fromEntries(formData.entries()));
      postData('https://formspree.io/f/xvongrgr', json).then(data => {
        statusMessage.textContent = message.success;
      }).catch(() => {
        statusMessage.textContent = message.failure;
      }).finally(() => {
        clearInputs();
        setTimeout(() => {
          statusMessage.remove();
        }, 5000);
        setTimeout(() => {
          const windows = document.querySelectorAll('[data-modal]');
          windows.forEach(item => {
            item.style.display = 'none';
          });
          document.body.style.overflow = '';
          document.body.style.marginRight = `0px`;
        }, 8000);
      });
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (forms);

// https://formspree.io/f/xyyaylkr
// https://formspree.io/f/xvongrgr

/***/ }),

/***/ "./src/js/modules/images.js":
/*!**********************************!*\
  !*** ./src/js/modules/images.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const images = () => {
  const imgPopup = document.createElement('div');
  const workSection = document.querySelector('.photo_gallery');
  const bigImage = document.createElement('img');
  bigImage.classList.add('big_image');
  const scroll = calcScroll(); // добавил отсуп для скрола

  imgPopup.classList.add('popup');
  workSection.appendChild(imgPopup);
  imgPopup.style.justifyContent = 'center';
  imgPopup.style.alignItems = 'center';
  imgPopup.style.display = 'none';
  imgPopup.appendChild(bigImage);
  workSection.addEventListener('click', e => {
    e.preventDefault();
    let target = e.target;
    if (target && target.closest('.preview')) {
      imgPopup.style.display = 'flex';
      const path = target.getAttribute('src');
      bigImage.src = path;
      document.body.style.overflow = 'hidden';
      document.body.style.marginRight = `${scroll}px`; // добавил отсуп для скрола
    }

    if (target && target.matches('div.popup')) {
      // if (target && target.classList.contains('popup')) {
      imgPopup.style.display = 'none';
      document.body.style.overflow = '';
      document.body.style.marginRight = `0px`;
    }
  });
};
function calcScroll() {
  // добавил отсуп для скрола
  let div = document.createElement('div');
  div.style.width = '50px';
  div.style.height = '50px';
  div.style.overflowY = 'scroll';
  div.style.visibility = 'hidden';
  document.body.appendChild(div);
  let scrollWidth = div.offsetWidth - div.clientWidth;
  div.remove();
  return scrollWidth;
}
/* harmony default export */ __webpack_exports__["default"] = (images);

/***/ }),

/***/ "./src/js/modules/inputRange.js":
/*!**************************************!*\
  !*** ./src/js/modules/inputRange.js ***!
  \**************************************/
/*! exports provided: foo, inputRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foo", function() { return foo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputRange", function() { return inputRange; });
function getVals() {
  // Get slider values
  var parent = this.parentNode;
  var slides = parent.getElementsByTagName("input");
  var slide1 = parseFloat(slides[0].value);
  var slide2 = parseFloat(slides[1].value);
  // Neither slider will clip the other, so make sure we determine which is larger
  if (slide1 > slide2) {
    var tmp = slide2;
    slide2 = slide1;
    slide1 = tmp;
  }
  let displayElement = parent.getElementsByClassName("rangeValues")[0];
  displayElement.innerHTML = slide1 + " метров";
  let displayElement2 = parent.getElementsByClassName("rangeValues2")[0];
  displayElement2.innerHTML = slide2 + " метров";
}
function foo() {
  //window.onload = 
  // Initialize Sliders
  var sliderSections = document.getElementsByClassName("range-slider");
  for (var x = 0; x < sliderSections.length; x++) {
    var sliders = sliderSections[x].getElementsByTagName("input");
    for (var y = 0; y < sliders.length; y++) {
      if (sliders[y].type === "range") {
        sliders[y].oninput = getVals;
        // Manually trigger event first time to display values
        sliders[y].oninput();
      }
    }
  }
}
// export default foo;

const inputRange = () => {
  for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
    e.style.setProperty('--value', e.value);
    e.style.setProperty('--min', e.min == '' ? '0' : e.min);
    e.style.setProperty('--max', e.max == '' ? '100' : e.max);
    e.addEventListener('input', () => e.style.setProperty('--value', e.value));
  }
};

/***/ }),

/***/ "./src/js/modules/inputValue.js":
/*!**************************************!*\
  !*** ./src/js/modules/inputValue.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const inputValue = (inputRange, calc) => {
  const sliders = document.querySelectorAll('.styled-slider');
  const inputs = document.querySelectorAll('.mortgage_input.price, .mortgage_input.fee');
  const inputsCT = document.querySelector('.mortgage_input.term');
  const sliderValue = slider => {
    let value;
    if (slider.value >= 31) {
      slider.value = Math.round(slider.value / 1000) * 1000;
      value = (Math.round(slider.value / 1000) * 1000).toString();
    } else {
      value = Math.round(slider.value).toString();
    }
    if (value.length == 6) {
      finalValue = `${value[0]}${value[1]}${value[2]} 000 ₽`;
    } else if (value.length == 7) {
      finalValue = `${value[0]} ${value[1]}${value[2]}${value[3]} 000 ₽`;
    } else if (value.length == 8) {
      finalValue = `${value[0]}${value[1]} ${value[2]}${value[3]}${value[4]} 000 ₽`;
    } else {
      if (value == 1) {
        finalValue = `${value} год`;
      } else if (value > 1 && value < 5) {
        finalValue = `${value} года`;
      } else {
        finalValue = `${value} лет`;
      }
    }
    slider.previousElementSibling.value = finalValue;
  };
  const inputsValue = input => {
    let valueS;
    const valueArr = input.value.match(/\d/ig);
    let value = +valueArr.join('');
    if (value >= 31) {
      value = Math.floor(value / 1000) * 1000;
      valueS = value.toString();
    } else {
      valueS = value.toString();
    }
    if (valueS.length == 6) {
      input.value = `${valueS[0]}${valueS[1]}${valueS[2]} 000 ₽`;
    } else if (valueS.length == 7) {
      input.value = `${valueS[0]} ${valueS[1]}${valueS[2]}${valueS[3]} 000 ₽`;
    } else if (valueS.length == 8) {
      input.value = `${valueS[0]}${valueS[1]} ${valueS[2]}${valueS[3]}${valueS[4]} 000 ₽`;
    } else {
      const min = input.nextElementSibling.getAttribute('min');
      if (min == 100000) {
        input.value = `100 000 ₽`;
        value = min;
      } else {
        input.value = `1 000 000 ₽`;
        value = min;
      }
    }
    input.nextElementSibling.value = value;
    inputRange();
    console.log(input.nextElementSibling.value);
  };
  const inputsCTValue = input => {
    let value;
    const valueArr = input.value.match(/\d/ig);
    if (!valueArr) {
      value = 1;
      input.value = `1 год`;
    } else {
      value = +valueArr.join('');
      let valueS = value.toString();
      if (valueS == 1) {
        input.value = `${valueS} год`;
      } else if (valueS > 1 && value < 5) {
        input.value = `${valueS} года`;
      } else {
        input.value = `${valueS} лет`;
      }
    }
    input.nextElementSibling.value = value;
    inputRange();
  };
  let finalValue;
  sliders.forEach(slider => {
    sliderValue(slider);
  });
  sliders.forEach(slider => {
    slider.addEventListener('input', () => {
      sliderValue(slider);
    });
  });
  inputs.forEach(input => {
    input.addEventListener('change', () => {
      inputsValue(input);
      calc();
    });
  });
  inputsCT.addEventListener('change', () => {
    inputsCTValue(inputsCT);
    calc();
  });
};
/* harmony default export */ __webpack_exports__["default"] = (inputValue);

/***/ }),

/***/ "./src/js/modules/mask.js":
/*!********************************!*\
  !*** ./src/js/modules/mask.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const mask = selector => {
  let setCursorPosition = (pos, elem) => {
    elem.focus();
    if (elem.setSelectionRange) {
      elem.setSelectionRange(pos, pos);
    } else if (elem.createTextRange) {
      let range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  };
  function createMask(event) {
    let matrix = '+7 (___) ___ __ __';
    let i = 0;
    let def = matrix.replace(/\D/g, '');
    let val = this.value.replace(/\D/g, '');
    if (def.length >= val.length) {
      val = def;
    }
    this.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
    });
    if (event.type === 'blur') {
      if (this.value.length == 2) {
        this.value = '';
      }
    } else {
      setCursorPosition(this.value.length, this);
    }
  }
  let inputs = document.querySelectorAll(selector);
  inputs.forEach(input => {
    input.addEventListener('input', createMask);
    input.addEventListener('focus', createMask);
    input.addEventListener('blur', createMask);
  });
};
/* harmony default export */ __webpack_exports__["default"] = (mask);

/***/ }),

/***/ "./src/js/modules/modals.js":
/*!**********************************!*\
  !*** ./src/js/modules/modals.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const modals = () => {
  let modalTimerId;
  function bindModal(triggerSelector, modalSelector, closeSelector) {
    let closeClickOverlay = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
    const trigger = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);
    const close = document.querySelector(closeSelector);
    const windows = document.querySelectorAll('[data-modal]');
    const scroll = calcScroll();
    trigger.forEach(item => item.addEventListener('click', e => {
      if (e.target) {
        e.preventDefault();
      }
      windows.forEach(item => {
        item.style.display = 'none';
      });
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
      document.body.style.marginRight = `${scroll}px`;
      clearTimeout(modalTimerId);
    }));
    close.addEventListener('click', () => {
      windows.forEach(item => {
        item.style.display = 'none';
      });
      modal.style.display = 'none';
      document.body.style.overflow = '';
      document.body.style.marginRight = `0px`;
    });
    modal.addEventListener('click', e => {
      if (e.target === modal && closeClickOverlay) {
        windows.forEach(item => {
          item.style.display = 'none';
        });
        modal.style.display = 'none';
        document.body.style.overflow = '';
        document.body.style.marginRight = `0px`;
      }
    });
  }
  function showModalByTime(selector, time) {
    modalTimerId = setTimeout(function () {
      document.querySelector(selector).style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }, time);
  }
  function calcScroll() {
    let div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';
    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  }
  bindModal('.modal_btn', '.modal', '.close_modal');
  bindModal('.modal_calc_btn', '.modal_calc', '.modal_calc_close');
  bindModal('.modal_apartment_btn', '.modal_apartment', '.modal_apartment_close', false);
  bindModal('.modal_area_btn', '.modal_area', '.modal_area_close', false);
  bindModal('.modal_finishing_btn', '.modal_finishing', '.modal_finishing_close', false);
  bindModal('.modal_finish_btn', '.modal_finish', '.modal_finish_close', false);
  showModalByTime('.modal', 6000000000);
};
/* harmony default export */ __webpack_exports__["default"] = (modals);

/***/ }),

/***/ "./src/js/modules/options.js":
/*!***********************************!*\
  !*** ./src/js/modules/options.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const options = banks => {
  // const banks = [{
  //         name: 'Сбербанк',
  //         interestRate: 6.7
  //     },
  //     {
  //         name: 'Дом.РФ',
  //         interestRate: 6.8
  //     },
  //     {
  //         name: 'Абсолют банк',
  //         interestRate: 6.5
  //     }
  // ]

  const select = document.querySelector('#bank');
  const render = (name, interestRate) => {
    const element = document.createElement('option');
    element.setAttribute('data-rate', interestRate);
    element.innerHTML = `
            ${name}
        `;
    select.append(element);
  };
  banks.map(_ref => {
    let {
      name,
      interestRate
    } = _ref;
    render(name, interestRate);
  });
};
/* harmony default export */ __webpack_exports__["default"] = (options);

/***/ }),

/***/ "./src/js/modules/scrolling.js":
/*!*************************************!*\
  !*** ./src/js/modules/scrolling.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const scrolling = upSelector => {
  // 2
  const upElem = document.querySelectorAll(upSelector);
  if (upElem[0].classList.contains('pageup')) {
    let showScroll = false;
    window.addEventListener('scroll', () => {
      if (document.documentElement.scrollTop > 1850 && !showScroll) {
        showScroll = true;
        upElem[0].style.display = 'block';
      } else if (document.documentElement.scrollTop < 1850 && showScroll) {
        showScroll = false;
        upElem[0].style.display = 'none';
      }
    });
  }
  let links = document.querySelectorAll('[href^="#"]');
  let speed = 0.4;
  links.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      let elementTop = document.documentElement.scrollTop;
      let bodyTop = document.body.scrollTop;
      let widthTop = Math.round(elementTop || bodyTop); // сколько пролистали
      let hash = this.hash;
      let toBlock = document.querySelector(hash).getBoundingClientRect().top; // к чему мы скролим, затем получим верх-ие коор-ы элим относительно экрана
      let start = null;
      requestAnimationFrame(step);
      function step(time) {
        if (start === null) {
          start = time;
        }
        let progress = time - start;
        let r = toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) : Math.min(widthTop + progress / speed, widthTop + toBlock); // кол-во пикселей прокутки
        document.documentElement.scrollTo(0, r);
        if (r != widthTop + toBlock) {
          requestAnimationFrame(step);
        } else {
          location.hash = hash;
        }
      }
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (scrolling);

/***/ }),

/***/ "./src/js/modules/sliders.js":
/*!***********************************!*\
  !*** ./src/js/modules/sliders.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const sliders = selector => {
  const container = document.querySelector(selector);
  let slides = container.children;
  let paused = false;
  function activateAnimation() {
    paused = setInterval(() => nextSlide(), 3000);
  }
  activateAnimation();
  const nextSlide = () => {
    container.appendChild(slides[0]);
  };
  container.addEventListener('mouseenter', () => {
    clearInterval(paused);
  });
  container.addEventListener('mouseleave', () => {
    activateAnimation();
  });
};
/* harmony default export */ __webpack_exports__["default"] = (sliders);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map