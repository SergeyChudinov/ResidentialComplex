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
/* harmony import */ var _modules_inputRange__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/inputRange */ "./src/js/modules/inputRange.js");









window.addEventListener('DOMContentLoaded', () => {
  "use strict";

  let modalState = {};
  Object(_modules_changeModalState__WEBPACK_IMPORTED_MODULE_5__["default"])(modalState);
  Object(_modules_scrolling__WEBPACK_IMPORTED_MODULE_0__["default"])('.pageup');
  Object(_modules_modals__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_modules_forms__WEBPACK_IMPORTED_MODULE_2__["default"])(modalState);
  Object(_modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_3__["default"])('[name="name"]');
  Object(_modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_3__["default"])('[name="message"]');
  Object(_modules_mask__WEBPACK_IMPORTED_MODULE_4__["default"])('[name="phone"]');
  Object(_modules_inputRange__WEBPACK_IMPORTED_MODULE_8__["default"])();
  Object(_modules_cards__WEBPACK_IMPORTED_MODULE_6__["default"])();
  Object(_modules_filter__WEBPACK_IMPORTED_MODULE_7__["default"])();
});

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
const changeModalState = state => {
  const apartments = document.querySelectorAll('.checkbox_apartment');
  const areaFrom = document.querySelectorAll('.input_area_from');
  const areaTo = document.querySelectorAll('.input_area_to');
  const finishing = document.querySelectorAll('.checkbox_finishing');
  function bindActionToElems(event, elem, prop) {
    elem.forEach((item, i) => {
      item.addEventListener(event, () => {
        switch (item.nodeName) {
          case 'SPAN':
            state[prop] = i;
            break;
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
              state[prop] = item.value;
            }
            break;
          case 'SELECT':
            state[prop] = item.value;
            break;
        }
        console.log(state);
      });
    });
  }
  bindActionToElems('change', apartments, 'apartmentType');
  bindActionToElems('change', areaFrom, 'area_from');
  bindActionToElems('change', areaTo, 'area_to');
  bindActionToElems('change', finishing, 'finishing');
};
/* harmony default export */ __webpack_exports__["default"] = (changeModalState);

// if (elem.length > 1) {
//     state[prop] = i; 
// } else {
//     state[prop] = item.value;
// }
// console.log(state);

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
const forms = state => {
  const form = document.querySelectorAll('form');
  const inputs = document.querySelectorAll('input');
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
      if (item.getAttribute('data-calc') === 'end') {
        for (let key in state) {
          formData.append(key, state[key]);
        }
      }
      const json = JSON.stringify(Object.fromEntries(formData.entries()));
      postData('https://formspree.io/f/xyyaylkr', json).then(data => {
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

// const forms = (state) => {
//     const form = document.querySelectorAll('form');
//     const inputs = document.querySelectorAll('input');

//     checkNumInputs('input[name="user_phone"]');

//     const message = {
//         loading: 'Загрузка',
//         success: 'Спасибо! Мы с вами саяжемся!',
//         failure: 'Что-то пошло не так...'
//     }

//     const postData = async (url, data) => {
//         document.querySelector('.status').textContent = message.loading;
//         let res = await fetch(url, {
//             method: 'POST',
//             headers: {
//                 'Content-type': 'application/json'
//             },
//             body: data
//         });
//         // return await res.text();
//         return await res.json();
//     };
//     const clearInputs = () => {
//         inputs.forEach(item => {
//             item.value = '';
//         });
//     };
//     form.forEach(item => {
//         item.addEventListener('submit', (e) => {
//             e.preventDefault();

//             let statusMessage = document.createElement('div');
//             statusMessage.classList.add('status');
//             item.appendChild(statusMessage);

//             const formData = new FormData(item);
//             if (item.getAttribute('data-calc') === 'end') {
//                 for(let key in state) {
//                     formData.append(key, state[key])
//                 }
//             }

//             console.log(formData);
//             console.log(12345);
//             const json = JSON.stringify(Object.fromEntries(formData.entries()));
//             console.log(json);

//             postData('http://localhost:3000/requests', json)
//                 .then(data => {
//                     console.log(data);
//                     statusMessage.textContent = message.success;
//                 }).catch(() => {
//                     statusMessage.textContent = message.failure;
//                 }).finally(() => {
//                     clearInputs();
//                     setTimeout(() => {
//                         statusMessage.remove();
//                     }, 5000);
//                     setTimeout(() => {
//                         const windows = document.querySelectorAll('[data-modal]');
//                         windows.forEach(item => {
//                             item.style.display = 'none';
//                         });
//                         document.body.style.overflow = '';
//                     }, 8000);
//                 })
//         });
//     });
// };
// export default forms;

/***/ }),

/***/ "./src/js/modules/inputRange.js":
/*!**************************************!*\
  !*** ./src/js/modules/inputRange.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = (foo);

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

/***/ })

/******/ });
//# sourceMappingURL=script.js.map