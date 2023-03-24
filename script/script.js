const profileEditButton = document.querySelector(".profile__edit-button");
const profileAddButton = document.querySelector(".profile__add-button");
const popupSubmitButton = document.querySelector(".popup__submit-button");
//profile попап и контент
const profilePopup = document.querySelector(".popup-profile");
const profileInfoTitle = document.querySelector(".profile__title");
const profileInfoSubtitle = document.querySelector(".profile__subtitle");
//card попап
const cardPopup = document.querySelector(".popup-card");
// Находим форму в DOM (форма внутри попапа)
const formElement = document.querySelector(".popup__container");
// Находим поля формы в DOM
const nameInput = formElement.querySelector("#name");
const jobInput = formElement.querySelector("#job");

//кнопки закрытия попапов
const popupCloseProfile = document.querySelector(".popup__close-button");
const popupCloseCard = cardPopup.querySelector(".popup__close-button");

//открытие попапа
const openPopup = function (popup) {
  popup.classList.add("popup_opened");
};
// закрытие попапа
const closePopup = function (popup) {
  popup.classList.remove("popup_opened");
};

//функция обработчик сабмита
function handleFormSubmit(evt) {
  evt.preventDefault();
  profileInfoTitle.textContent = nameInput.value;
  profileInfoSubtitle.textContent = jobInput.value;
  closePopup(profilePopup);
}

//слушатели для отрытия, наполнения и закрытия попапа profile
profileEditButton.addEventListener("click", function () {
  openPopup(profilePopup);
  nameInput.value = profileInfoTitle.textContent;
  jobInput.value = profileInfoSubtitle.textContent;
});
popupCloseProfile.addEventListener("click", function () {
  closePopup(profilePopup);
});

//слушатели для открытия и закрытия попапа card
profileAddButton.addEventListener("click", function () {
  openPopup(cardPopup);
});
popupCloseCard.addEventListener("click", function () {
  closePopup(cardPopup);
});

//handler для сабмита формы.
formElement.addEventListener("submit", handleFormSubmit);

//функция создания карточки
const createCard = function () {

}

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
