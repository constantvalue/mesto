import { FormValidator } from "./FormValidator.js";
import { Card } from "./Card.js";

//нодлист попапов
const popups = document.querySelectorAll(".popup");

const profileEditButton = document.querySelector(".profile__edit-button");
const profileAddButton = document.querySelector(".profile__add-button");
const popupSubmitButton = document.querySelector(".popup__submit-button");
const closeButtons = document.querySelectorAll(".popup__close-button");
//profile попап и контент
const profilePopup = document.querySelector(".popup-profile");
const profileInfoTitle = document.querySelector(".profile__title");
const profileInfoSubtitle = document.querySelector(".profile__subtitle");
//card попап
const cardPopup = document.querySelector(".popup-card");
// Находим форму profile в DOM (форма внутри попапа)
const formProfileElement = document.querySelector("#profileForm");
// Находим поля формы profile в DOM
const nameInput = formProfileElement.querySelector("#popup-profile-input-name");
const jobInput = formProfileElement.querySelector("#popup-profile-input-job");
//находим форму card в DOM
const formCardElement = document.querySelector("#cardForm");
//поля формы card в DOM
const titleInputCard = formCardElement.querySelector("#popup-card-title-text");
const linkInputCard = formCardElement.querySelector("#popup-card-link-value");
//кнопки закрытия попапов
const popupCloseProfile = document.querySelector(".popup__close-button");
const popupCloseCard = cardPopup.querySelector(".popup__close-button");
const imagePopupCloseButton = document.querySelector(".popup__close-button_position_image-popup");
//поиск темплейта. Контейнер для темплейта
const cardContainer = document.querySelector(".elements");
const cardTemplateSelector = document.querySelector("#template_card");
const cardTemplate = document.querySelector(".template").content;
//поиск попапа image и всего что с ним связано
const popupImage = document.querySelector(".popup__image");
const popupImageHeading = document.querySelector(".popup__image-heading");
const showPopupImage = document.querySelector(".popup-image");

//преобразуем node-list в массив, для возможности использования метода .some внутри функции hasInvalidInput.
const popupFormCardInputs = Array.from(formCardElement.querySelectorAll(".popup__input"));
const popupFormProfileInputs = Array.from(formProfileElement.querySelectorAll(".popup__input"));

//объекты для создания карточек по умолчанию.
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const showImagePopup = function (object) {
  popupImageHeading.textContent = object.name;
  popupImage.alt = object.name;
  popupImage.src = object.link;
  openPopup(showPopupImage);
};

initialCards.forEach((element) => {
  const card = new Card(element, "#card_template", showImagePopup);
  cardContainer.prepend(card.generateCard());
});

//открытие попапа
const openPopup = function (popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closeOnEscape);
};
// закрытие попапа
const closePopup = function (popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeOnEscape);
};

//закрытие по keydown 'escape'
const closeOnEscape = function (evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
};

//закрытие при клики по оверлею
//добавил условную конструкцию
const closeByClickOnOverlay = function (evt) {
  if (evt.currentTarget === evt.target) {
    closePopup(evt.currentTarget);
  }
};

popups.forEach((popup) => {
  popup.addEventListener("mousedown", closeByClickOnOverlay);
});

//функция закрытия любого попапа с классом .popup
closeButtons.forEach((button) => {
  // находим 1 раз ближайший к крестику попап
  const popup = button.closest(".popup");
  // устанавливаем обработчик закрытия на крестик
  button.addEventListener("click", () => closePopup(popup));
});

//слушатели для отрытия, наполнения и закрытия попапа profile
profileEditButton.addEventListener("click", function () {
  openPopup(profilePopup);
  validatePopupProfile.resetErrors();
  nameInput.value = profileInfoTitle.textContent;
  jobInput.value = profileInfoSubtitle.textContent;
  validatePopupProfile.resetErrors();
});
//Закрытие попапа profile и запись значений в верстку
formProfileElement.addEventListener("submit", function (event) {
  event.preventDefault();
  profileInfoTitle.textContent = nameInput.value;
  profileInfoSubtitle.textContent = jobInput.value;
  closePopup(profilePopup);
});

//слушатели для открытия и закрытия попапа card
profileAddButton.addEventListener("click", function () {
  openPopup(cardPopup);
  validatePopupCard.resetErrors();
});

//этот слушатель запишет значения полей ввода в объект { name, link }. Объект будет использован в prependCard.
formCardElement.addEventListener("submit", function (event) {
  event.preventDefault();
  //создаю объект, который буду передавать в функцию prependCard
  const object = {
    name: titleInputCard.value,
    link: linkInputCard.value,
  };
  //создаем экземпляр класса при нажатии на сабмит.
  const newCard = new Card(object, "#card_template", showImagePopup);
  //добавляем в разметку с помощью метода prepend.
  cardContainer.prepend(newCard.generateCard());
  // prependCard(object);
  event.target.reset();
  closePopup(cardPopup);
});

// ---------------------------------------------VALIDATION--------------------------------------------------------------

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "popup__submit-button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const validatePopupProfile = new FormValidator(validationConfig, formProfileElement);
validatePopupProfile.enableValidation();

const validatePopupCard = new FormValidator(validationConfig, formCardElement);
validatePopupCard.enableValidation();

// --------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------
