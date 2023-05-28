(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,r(o.key),o)}}function r(e){var r=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===t(r)?r:String(r)}var n=function(){function t(e,n,o,i,u){var c,a,l,s=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),c=this,l=function(){s._showImagePopup(s._initialCard)},(a=r(a="_showImageOnClick"))in c?Object.defineProperty(c,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):c[a]=l,this._myId=e.myId,this._cardId=e._id,this._ownerId=e.owner._id,this._initialCard=e,this._cardTemplateSelector=n,this._showImagePopup=o,this._cardDeleteCallback=i,this._likesHandler=u}var n,o;return n=t,(o=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardTemplateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._buttonLike=this._element.querySelector(".element__like-button"),this._image=this._element.querySelector(".element__image"),this._image.alt=this._initialCard.name,this._image.src=this._initialCard.link,this._element.querySelector(".element__title").textContent=this._initialCard.name,this._isTrashButtonVisible(),this._setEventListeners(),this._element}},{key:"_isTrashButtonVisible",value:function(){this._myId===this._ownerId&&this._element.querySelector(".element__trash-button").classList.add("element___trash-button_visibility_visible")}},{key:"removeCard",value:function(){this._element.remove(),this._element=null}},{key:"_toggleLike",value:function(){this._buttonLike.classList.toggle("element__like-button_active")}},{key:"_setEventListeners",value:function(){var t=this;this._image.addEventListener("click",(function(){return t._showImageOnClick()})),this._element.querySelector(".element__trash-button").addEventListener("click",(function(){return t._cardDeleteCallback(t)})),this._element.querySelector(".element__like-button").addEventListener("click",(function(){return t._toggleLike()}))}}])&&e(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),t}();function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==o(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===o(i)?i:String(i)),n)}var i}var u=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._formSelector=r,this._config=e,this._submitButton=this._formSelector.querySelector(this._config.submitButtonSelector),this._formInputs=Array.from(this._formSelector.querySelectorAll(this._config.inputSelector))}var e,r;return e=t,(r=[{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"_showInputError",value:function(t){var e=document.querySelector(".".concat(t.id,"-error"));t.classList.add(this._config.inputErrorClass),e.classList.add(this._config.errorClass),e.textContent=t.validationMessage}},{key:"_hideInputError",value:function(t){var e=document.querySelector(".".concat(t.id,"-error"));t.classList.remove(this._config.inputErrorClass),e.classList.remove(this._config.errorClass),e.textContent=""}},{key:"_setEventListeners",value:function(){var t=this;this._toggleButtonState(),this._formInputs.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButtonState()}))}))}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t)}},{key:"_hasInvalidInput",value:function(){return this._formInputs.some((function(t){return!t.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput(this._formInputs)?(this._submitButton.classList.add(this._config.inactiveButtonClass),this._submitButton.setAttribute("disabled",!0)):(this._submitButton.classList.remove(this._config.inactiveButtonClass),this._submitButton.removeAttribute("disabled"))}},{key:"resetErrors",value:function(){var t=this;this._toggleButtonState(),this._formInputs.forEach((function(e){t._hideInputError(e)}))}}])&&i(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function a(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==c(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===c(o)?o:String(o)),n)}var o}var l=function(){function t(e,r){var n=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=n,this._containerSelector=r}var e,r;return e=t,(r=[{key:"addItem",value:function(t){this._containerSelector.prepend(t)}},{key:"renderItems",value:function(t){var e=this;t.reverse().forEach((function(t){e._renderer(t)}))}}])&&a(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function f(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,y(n.key),n)}}function p(t,e,r){return(e=y(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function y(t){var e=function(t,e){if("object"!==s(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===s(e)?e:String(e)}var b=function(){function t(e){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,"_handleEscClose",(function(t){"Escape"===t.key&&(r.close(),console.log(r))})),p(this,"_handleClickClose",(function(){r.close()})),p(this,"_handleClickOnOverlay",(function(t){t.currentTarget===t.target&&r.close()})),this._popupSelector=document.querySelector(e),this._closeButton=this._popupSelector.querySelector(".popup__close-button")}var e,r;return e=t,(r=[{key:"open",value:function(){this._popupSelector.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupSelector.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var t=this;this._closeButton.addEventListener("click",(function(){return t._handleClickClose()})),this._popupSelector.addEventListener("click",(function(e){return t._handleClickOnOverlay(e)}))}}])&&f(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function h(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==m(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==m(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===m(o)?o:String(o)),n)}var o}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=_(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},v.apply(this,arguments)}function d(t,e){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},d(t,e)}function _(t){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},_(t)}var S=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&d(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=_(n);if(o){var r=_(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===m(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,t))._submit=e,r._form=r._popupSelector.querySelector(".popup__form"),r._formInputs=r._form.querySelectorAll(".popup__input"),r._submitButton=r._form.querySelector(".popup__submit-button"),r._initialText=r._submitButton.textContent,r}return e=u,(r=[{key:"_getInputValues",value:function(){var t={};return this._formInputs.forEach((function(e){t[e.name]=e.value})),t}},{key:"setInputValues",value:function(t){this._formInputs.forEach((function(e){e.value=t[e.name]}))}},{key:"setEventListeners",value:function(){var t=this;v(_(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._submitButton.textContent="Сохранение ...",t._submit(t._getInputValues())}))}},{key:"defaultTextState",value:function(){this._submitButton.textContent=this._initialText}},{key:"close",value:function(){v(_(u.prototype),"close",this).call(this),this._form.reset()}}])&&h(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(b);function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function w(t,e){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},w(t,e)}function O(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=k(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},j.apply(this,arguments)}function k(t){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},k(t)}function E(t){var e=function(t,e){if("object"!==g(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==g(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===g(e)?e:String(e)}var P=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&w(t,e)}(i,t);var e,r,n,o=(r=i,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=k(r);if(n){var o=k(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===g(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return O(t)}(this,t)});function i(t){var e,r,n,u,c;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),n=O(r=o.call(this,t)),c=function(t){j((e=O(r),k(i.prototype)),"open",e).call(e),r._imageHeading.textContent=t.name,r._popupImg.src=t.link,r._popupImg.alt=t.name},(u=E(u="open"))in n?Object.defineProperty(n,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):n[u]=c,r._popupImg=r._popupSelector.querySelector(".popup__image"),r._imageHeading=r._popupSelector.querySelector(".popup__image-heading"),r}return e=i,Object.defineProperty(e,"prototype",{writable:!1}),e}(b);function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function I(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==C(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==C(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===C(o)?o:String(o)),n)}var o}var T=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._username=e.name,this._description=e.job,this._avatar=e.avatar}var e,r;return e=t,(r=[{key:"getUserInfo",value:function(){return{name:this._username.textContent,job:this._description.textContent}}},{key:"setUserInfo",value:function(t){this._username.textContent=t.name,this._description.textContent=t.about,this._avatar.src=t.avatar}},{key:"getId",value:function(){return this._id}},{key:"setId",value:function(t){this._id=t}}])&&I(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function L(t){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(t)}function q(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==L(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==L(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===L(o)?o:String(o)),n)}var o}var R=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=e.baseUrl,this._headers=e.headers}var e,r;return e=t,(r=[{key:"_returnResponse",value:function(t){return t.ok?t.json():Promise.reject("Ошибка"+t.status)}},{key:"getUserData",value:function(){return fetch(this._baseUrl+"/users/me",{headers:this._headers}).then(this._returnResponse)}},{key:"getInitialCards",value:function(){return fetch(this._baseUrl+"/cards",{headers:this._headers}).then(this._returnResponse)}},{key:"userInfoPatch",value:function(t){return fetch(this._baseUrl+"/users/me",{headers:this._headers,method:"PATCH",body:JSON.stringify({name:t.name,about:t.job})}).then(this._returnResponse)}},{key:"updateAvatar",value:function(t){return fetch(this._baseUrl+"/users/me/avatar",{headers:this._headers,method:"PATCH",body:JSON.stringify({avatar:t.avatar})}).then(this._returnResponse)}},{key:"addCardOnServer",value:function(t){return fetch(this._baseUrl+"/cards",{headers:this._headers,method:"POST",body:JSON.stringify({name:t.name,link:t.link})}).then(this._returnResponse)}},{key:"cardDelete",value:function(t){return fetch(this._baseUrl+"/cards/"+t._cardId,{headers:this._headers,method:"DELETE"}).then(this._returnResponse)}}])&&q(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function B(t){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B(t)}function x(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==B(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==B(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===B(o)?o:String(o)),n)}var o}function A(){return A="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=D(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},A.apply(this,arguments)}function U(t,e){return U=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},U(t,e)}function D(t){return D=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},D(t)}var V=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&U(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=D(n);if(o){var r=D(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===B(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._form=e._popupSelector.querySelector(".popup__form"),e._submitButton=e._form.querySelector("popup__submit-button"),e}return e=u,(r=[{key:"setEventListeners",value:function(){var t=this;A(D(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._submitCallback(),t.close()}))}},{key:"setSubmitAction",value:function(t){this._submitCallback=t}}])&&x(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(b),H={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},N=document.querySelector(".profile__edit-button"),F=document.querySelector(".profile__add-button"),J=(document.querySelectorAll(".popup__close-button"),document.querySelector(".popup-profile"),document.querySelector(".profile__title")),M=document.querySelector(".profile__subtitle"),z=(document.querySelector(".popup-card"),document.querySelector("#profileForm")),$=(z.querySelector("#popup-profile-input-name"),z.querySelector("#popup-profile-input-job"),document.querySelector("#cardForm")),G=($.querySelector("#popup-card-title-text"),$.querySelector("#popup-card-link-value"),document.querySelector(".elements")),K=(document.querySelector(".popup__image-heading"),document.querySelector(".popup-image"),document.querySelectorAll(".popup"),document.querySelector(".profile__avatar-button")),Q=document.querySelector(".profile__avatar"),W=document.querySelector("#avatarForm"),X={name:J,job:M,avatar:Q};function Y(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var Z=new R({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-66",headers:{authorization:"37444284-40d0-47c4-870b-23d568f81278","Content-Type":"application/json"}});Promise.all([Z.getUserData(),Z.getInitialCards()]).then((function(t){var e,r,n=(r=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,u,c=[],a=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;a=!1}else for(;!(a=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);a=!0);}catch(t){l=!0,o=t}finally{try{if(!a&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw o}}return c}}(e,r)||function(t,e){if(t){if("string"==typeof t)return Y(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Y(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];et.setId(o._id),et.setUserInfo(o),i.forEach((function(t){t.myId=o._id})),ct.renderItems(i)})).catch((function(t){console.log(t)}));var tt=new V(".popup-delete");tt.setEventListeners();var et=new T(X),rt=new S(".popup-profile",(function(t){Z.userInfoPatch(t).then((function(t){et.setUserInfo(t)})).then((function(){rt.close()})).catch((function(t){console.log(t)})).finally((function(){rt.defaultTextState()}))}));rt.setEventListeners(),K.addEventListener("click",(function(){return nt.open()}));var nt=new S(".popup-avatar",(function(t){Z.updateAvatar(t).then((function(t){et.setUserInfo(t)})).then((function(){nt.close()})).catch((function(t){console.log(t)})).finally((function(){nt.defaultTextState()}))}));nt.setEventListeners();var ot=new P(".popup-image");ot.setEventListeners();var it=function(t){ot.open(t)},ut=function(t){var e=new n(t,"#card_template",it,(function(t){tt.open(),tt.setSubmitAction((function(){Z.cardDelete(t).then((function(){e.removeCard()})).catch((function(t){console.log(t)}))}))})),r=e.generateCard();ct.addItem(r)},ct=new l({renderer:ut},G),at=new S(".popup-card",(function(t){Z.addCardOnServer(t).then((function(t){t.myId=et.getId(),ut(t)})).then((function(){at.close()})).catch((function(t){console.log(t)})).finally((function(){at.defaultTextState()}))}));at.setEventListeners(),N.addEventListener("click",(function(){rt.open(),rt.setInputValues(et.getUserInfo()),lt.resetErrors()})),F.addEventListener("click",(function(){at.open(),st.resetErrors()}));var lt=new u(H,z);lt.enableValidation();var st=new u(H,$);st.enableValidation(),new u(H,W).enableValidation()})();