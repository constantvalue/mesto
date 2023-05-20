import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, submit) {
    super(popupSelector);
    this._submit = submit;
    this._form = this._popupSelector.querySelector(".popup__form");
    this._formInputs = this._form.querySelectorAll(".popup__input");
    this._submitButton = this._form.querySelector("popup__submit-button");
  }

  _getInputValues() {
    const values = {};
    this._formInputs.forEach((input) => {
      values[input.name] = input.value;
    });
    return values;
  }

  setEventListeners() {
    super.setEventListeners();
  }
}
