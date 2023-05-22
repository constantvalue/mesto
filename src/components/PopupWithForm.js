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

  setInputValues(inputValues) {
    this._formInputs.forEach((input) => {
      input.value = inputValues[input.name]
    })
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (event) => {
      event.preventDefault();
      this._submit(this._getInputValues())
      this.close();
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}
