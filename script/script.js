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
// Находим поля формы profile в DOM
const nameInput = formElement.querySelector("#name");
const jobInput = formElement.querySelector("#job");
//находим форму card в DOM
const formCardElement = document.querySelector("#cardForm");
//поля формы card в DOM
const titleInputCard = formCardElement.querySelector("#title-card");
const linkInputCard = formCardElement.querySelector("#link-card");
//кнопки закрытия попапов
const popupCloseProfile = document.querySelector(".popup__close-button");
const popupCloseCard = cardPopup.querySelector(".popup__close-button");
//поиск темплейта. Контейнер для темплейта
const cardContainer = document.querySelector(".elements");
const cardTemplate = document.querySelector(".template__card").content;
const popupImage = document.querySelector(".popup__image");
const popupImageHeading = document.querySelector(".popup__image-heading");
const showPopupImage = document.querySelector(".popup-image");
const imagePopupCloseButton = document.querySelector(
  ".popup__close-button_position_image-popup"
);
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

//открытие попапа
const openPopup = function (popup) {
  popup.classList.add("popup_opened");
};
// закрытие попапа
const closePopup = function (popup) {
  popup.classList.remove("popup_opened");
};
//слушатели для отрытия, наполнения и закрытия попапа profile
profileEditButton.addEventListener("click", function () {
  openPopup(profilePopup);
  nameInput.value = profileInfoTitle.textContent;
  jobInput.value = profileInfoSubtitle.textContent;
});
//Закрытие попапа с хэндлером сабмита.
formElement.addEventListener("submit", function (evt) {
  evt.preventDefault();
  profileInfoTitle.textContent = nameInput.value;
  profileInfoSubtitle.textContent = jobInput.value;
  closePopup(profilePopup);
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

//функция создания карточки
const createCard = function (object) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".element__image");
  const cardElementTitle = cardElement.querySelector(".element__title");
  const cardLikeButton = cardElement.querySelector(".element__like-button");
  const cardTrashButton = cardElement.querySelector(".element__trash-button");

  cardImage.alt = object.name;
  cardElementTitle.textContent = object.name;
  cardImage.src = object.link;

  cardImage.addEventListener("click", function () {
    showImagePopup(object);
  });

  cardTrashButton.addEventListener("click", removeCard);

  cardLikeButton.addEventListener("click", function () {
    cardLikeButton.classList.toggle("element__like-button_active");
  });

  return cardElement;
};

const removeCard = function (evt) {
  const cardToRemove = evt.target.closest(".element");
  cardToRemove.remove();
};

//наполняем страницу карточками из массива initialCards
initialCards.forEach(function (object) {
  const card = createCard(object);
  cardContainer.append(card);
});

//функция открытия попапа картинки
const showImagePopup = function (object) {
  popupImageHeading.textContent = object.name;
  popupImage.alt = object.name;
  popupImage.src = object.link;
  openPopup(showPopupImage);
};

imagePopupCloseButton.addEventListener("click", function () {
  closePopup(showPopupImage);
});

//этот слушатель передаст значения полей ввода в объект. Объект будет использован в prependCard.
formCardElement.addEventListener("submit", function (evt) {
  evt.preventDefault();
  //создадим объект, который будем передавать в функцию prependCard
  const object = { name: titleInputCard.value, link: linkInputCard.value };
  prependCard(object);
  closePopup(cardPopup);
  titleInputCard.value = "";
  linkInputCard.value = "";
});

//функция добавления карточки. Добавляет карточку в начало Grid контейнера, после нажатия по кнопке сабмита в попапе создания карточки.
prependCard = function (object) {
  const card = createCard(object);
  cardContainer.prepend(card);
};
