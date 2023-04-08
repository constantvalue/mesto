// включение валидации вызовом enableValidation
// все настройки передаются при вызове

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "popup__submit-button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const enableValidation = (validationConfig) => {
  const formList = Array.from(document.querySelectorAll(validationConfig.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement, validationConfig);
  });
};

//функция показа <span> ошибки по аналогии с тренажером
const showInputError = function (input, validationConfig)  {
  //с помощью шаблонных строк нахожу контейнер для классса ошибки и для текста из свойства .validationMessage
  const errorElement = document.querySelector(`.${input.id}-error`);
  input.classList.add(validationConfig.inputErrorClass);
  errorElement.classList.add(validationConfig.errorClass);
  errorElement.textContent = input.validationMessage;
};
//все по аналогии с функцией showInputError
const hideInputError = function (input, validationConfig)  {
  const errorElement = document.querySelector(`.${input.id}-error`);
  input.classList.remove(validationConfig.inputErrorClass);
  errorElement.classList.remove(validationConfig.errorClass);
  //сбрасываем текст ошибок.
  errorElement.textContent = "";
};

const setEventListeners = function (formElement, validationConfig) {
  const formInputs = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
  //вызываем функцию toggleButtonState, чтобы кнопка была неактивная по умолчанию.
  toggleButtonState(formInputs, validationConfig, formElement);
  formInputs.forEach((input) => {
    //слушаем инпуты, на каждом вводе символа проверяем валидность поля ввода.
    input.addEventListener("input", () => {
      checkInputValidity(input, validationConfig);
      //при каждом нажатии проверяем - нужно ли нам "перекрасить" кнопку сабмита и сделать ее неактивной со свойством cursor: not-allowed;
      toggleButtonState(formInputs, validationConfig, formElement);
    });
  });
};

const checkInputValidity = function (input, validationConfig) {
  if (!input.validity.valid) {
    showInputError(input, validationConfig);
  } else {
    hideInputError(input, validationConfig);
  }
};

const hasInvalidInput = function (formInputs) {
  return formInputs.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = function (formInputs, validationConfig, formElement) {
  const submitButton = formElement.querySelector(validationConfig.submitButtonSelector);
  if (hasInvalidInput(formInputs)) {
    submitButton.classList.add(validationConfig.inactiveButtonClass);
    submitButton.setAttribute("disabled", true);
  } else {
    submitButton.classList.remove(validationConfig.inactiveButtonClass);
    submitButton.removeAttribute("disabled");
  }
};

//функция, которая очистит попап профиля от ошибок при открытии. validationConfig в теле функции используется только для ремува классов ошибок.
// поэтому берём validationConfig из глобальной области видимости.
const resetErrors = function (popup) {
  //коллекция popupInputs уже имеет метод .forEach
  //поэтому я не преобразовываю в массив с помощью Array.from
  const popupInputs = popup.querySelectorAll(validationConfig.inputSelector);
  popupInputs.forEach((input) => {
    hideInputError(input, validationConfig);
  })
}

enableValidation(validationConfig);

