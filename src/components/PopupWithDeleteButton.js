import { Popup } from "./Popup.js";

// этот класс реализован по совету наставника. Ссылка на тред : https://app.pachca.com/chats/3916443?message=53656785

export class PopupWithDeleteButton extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._popupSelector.querySelector(".popup__form");
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (event) => {
      event.preventDefault();
      this._submitCallback();
      this.close();
    });
  }

  setSubmitAction(submitCallback) {
    this._submitCallback = submitCallback;
  }
}
