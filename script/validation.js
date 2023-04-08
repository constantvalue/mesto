// включение валидации вызовом enableValidation
// все настройки передаются при вызове

const validationConfig ={
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "popup__submit-button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const enableValidation = (validationConfig) => {
  const formList = Array.from(
    document.querySelectorAll(validationConfig.formSelector)
  );
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement, validationConfig);
  });
};

const setEventListeners = function(formElement, validationConfig) {
  const formInputs = Array.from(formElement.querySelectorAll(validationConfig.inputSelector))
  formInputs.forEach(input => {
    input.addEventListener("input", () => {
      checkInputValidity(input, validationConfig);
    })
  })
}

const checkInputValidity = (input, validationConfig) => {
  if (!input.validity.valid) {
    showInputError(input, validationConfig.inputErrorClass, validationConfig.errorClass);
  } else {
    hideInputError(input, validationConfig.inputErrorClass, validationConfig.errorClass);
  }
};

const showInputError = (input, inputErrorClass, errorClass) => {
  const errorElement = document.querySelector(`.${input.id}-error`);
  console.log(errorElement);
  input.classList.add(validationConfig.inputErrorClass);
  errorElement.classList.add(validationConfig.errorClass);
  errorElement.textContent = input.validationMessage;
};



const hideInputError = (input, inputErrorClass, errorClass) => {
  const errorElement = document.querySelector(`.${input.id}-error`);
  input.classList.remove(validationConfig.inputErrorClass);
  errorElement.classList.remove(validationConfig.errorClass);
  errorElement.textContent = "";
};

const hasInvalidInput = function (inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};





enableValidation(validationConfig);
