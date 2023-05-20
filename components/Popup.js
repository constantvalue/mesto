export class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._closeButton = this._popupSelector.querySelector(".popup__close-button");
  }

  open() {
    this._popupSelector.classList.add("popup_opened");
    document.addEventListener("keydown", (event) => this._handleEscClose(event));
  }

  close() {
    this._popupSelector.classList.remove("popup_opened");
    document.removeEventListener("keydown", (event) => this._handleEscClose(event));
  }

  _handleEscClose(event) {
    if (event.key === "Escape") {
      this.close();
    }
  }

  _handleClickClose = () => {
    this.close();
  };

  _handleClickOnOverlay = (event) => {
    if (event.currentTarget === event.target) {
      this.close();
    }
  };

  setEventListeners() {
    this._closeButton.addEventListener("click", () => this._handleClickClose());
    this._popupSelector.addEventListener("click", (event) => this._handleClickOnOverlay(event));
  }
}

// //открытие попапа
// const openPopup = function (popup) {
//   popup.classList.add("popup_opened");
//   document.addEventListener("keydown", closeOnEscape);
// };
// // закрытие попапа
// const closePopup = function (popup) {
//   popup.classList.remove("popup_opened");
//   document.removeEventListener("keydown", closeOnEscape);
// };

// //закрытие по keydown 'escape'
// const closeOnEscape = function (evt) {
//   if (evt.key === "Escape") {
//     const openedPopup = document.querySelector(".popup_opened");
//     closePopup(openedPopup);
//   }
// };

// //закрытие при клики по оверлею
// //добавил условную конструкцию
// const closeByClickOnOverlay = function (evt) {
//   if (evt.currentTarget === evt.target) {
//     closePopup(evt.currentTarget);
//   }
// };
