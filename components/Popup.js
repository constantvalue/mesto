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

