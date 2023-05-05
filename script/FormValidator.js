export class FormValidator {
  constructor(config, formSelector) {
    this._formSelector = formSelector;
    this._config = config;
  }

  // публичный метод для включения валидации
  enableValidation() {
    this._formInputs = Array.from(this._formSelector.querySelectorAll(this._config.inputSelector));
    this._formButton = this._formSelector.querySelectorAll(this._config.submitButtonSelector);
    this._setEventListeners();
  }

  // --------------------------------------------------------------------------------------

  _showInputError(input) {
    const errorElement = document.querySelector(`.${input.id}-error`);
    input.classList.add(this._config.inputErrorClass);
    errorElement.classList.add(this._config.errorClass);
    errorElement.textContent = input.validationMessage;
  }

  _hideInputError(input) {
    const errorElement = document.querySelector(`.${input.id}-error`);
    input.classList.remove(this._config.inputErrorClass);
    errorElement.classList.remove(this._config.errorClass);
    //сбрасываем текст ошибок.
    errorElement.textContent = "";
  }

  _setEventListeners() {
    this._toggleButtonState();
    this._formInputs.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkInputValidity(input);
        this._toggleButtonState();
      });
    });
  }

  _checkInputValidity(input) {
    if (!input.validity.valid) {
      this._showInputError(input);
    } else {
      this._hideInputError(input);
    }
  }

  _hasInvalidInput() {
    return this._formInputs.some((input) => {
      return !input.validity.valid;
    });
  }

  _toggleButtonState() {
    const submitButton = this._formSelector.querySelector(this._config.submitButtonSelector);
    if (this._hasInvalidInput(this._formInputs)) {
      submitButton.classList.add(this._config.inactiveButtonClass);
      submitButton.setAttribute("disabled", true);
    } else {
      submitButton.classList.remove(this._config.inactiveButtonClass);
      submitButton.removeAttribute("disabled");
    }
  }

  // публичный метод сброса ошибок и toggle button
  resetErrors() {
    this._toggleButtonState();
    this._formInputs.forEach((input) => {
      this._hideInputError(input);
    });
  }
}
