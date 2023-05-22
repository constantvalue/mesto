//объекты для создания карточек по умолчанию.
export const initialCards = [
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

//экспорт объекта для валидации.
export const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "popup__submit-button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

// --------------------------------------------------------------------------------------
// -------------------------------ПЕРЕМЕННЫЕ---------------------------------------------
// --------------------------------------------------------------------------------------

export const profileEditButton = document.querySelector(".profile__edit-button");
export const profileAddButton = document.querySelector(".profile__add-button");
export const closeButtons = document.querySelectorAll(".popup__close-button");
//profile попап и контент
export const profilePopup = document.querySelector(".popup-profile");
export const profileInfoTitle = document.querySelector(".profile__title");
export const profileInfoSubtitle = document.querySelector(".profile__subtitle");
//card попап
export const cardPopup = document.querySelector(".popup-card");
// Находим форму profile в DOM (форма внутри попапа)
export const formProfileElement = document.querySelector("#profileForm");
// Находим поля формы profile в DOM
export const nameInput = formProfileElement.querySelector("#popup-profile-input-name");
export const jobInput = formProfileElement.querySelector("#popup-profile-input-job");
//находим форму card в DOM
export const formCardElement = document.querySelector("#cardForm");
//поля формы card в DOM
export const titleInputCard = formCardElement.querySelector("#popup-card-title-text");
export const linkInputCard = formCardElement.querySelector("#popup-card-link-value");
//поиск темплейта. Контейнер для темплейта
export const cardContainer = document.querySelector(".elements");
//поиск попапа image и всего что с ним связано
export const popupImage = document.querySelector(".popup__image");
export const popupImageHeading = document.querySelector(".popup__image-heading");
export const showPopupImage = document.querySelector(".popup-image");
//нодлист попапов
export const popups = document.querySelectorAll(".popup");

//объект для создания экземпляра класса UserInfo
export const userInfoObj = {
  name: profileInfoTitle,
  job: profileInfoSubtitle,
};
