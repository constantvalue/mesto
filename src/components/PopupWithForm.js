import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, submit) {
    super(popupSelector);
    this._submit = submit;
    this._form = this._popup.querySelector(".popup__form");
    this._formInputs = this._form.querySelectorAll(".popup__input");
    this._submitButton = this._form.querySelector(".popup__submit-button");
    this._initialText = this._submitButton.textContent;
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
      input.value = inputValues[input.name];
    });
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (event) => {
      event.preventDefault();
      this._submitButton.textContent = "Сохранение ...";
      this._submit(this._getInputValues());
      //метод close будем вызывать в .then. Иначе попап закрывается не дождавшись результата от fetch запроса.
      // this.close();
    });
  }

  //метод возвращающий исходное состояние текста в конце промиса.
  setDefaultTextState() {
    this._submitButton.textContent = this._initialText;
  }

  close() {
    super.close();
    this._form.reset();
  }
}
