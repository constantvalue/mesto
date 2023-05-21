//импорт классов
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { Popup } from "../components/Popup.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { UserInfo } from "../components/UserInfo.js";

//импорт всех переменных.
import {
  userInfoObj,
  profileEditButton,
  profileAddButton,
  closeButtons,
  profilePopup,
  profileInfoTitle,
  profileInfoSubtitle,
  cardPopup,
  formProfileElement,
  nameInput,
  jobInput,
  formCardElement,
  titleInputCard,
  linkInputCard,
  cardContainer,
  popupImage,
  popupImageHeading,
  showPopupImage,
  popups,
} from "../utils/constants.js";

//импорт массива объектов карточек по умолчанию
import { initialCards } from "../utils/constants.js";

//импорт объекта с "настройками" валидации
import { validationConfig } from "../utils/constants.js";

const createUserInfo = new UserInfo(userInfoObj);

const profilePopupCreate = new PopupWithForm(profilePopup, (data) => {
  createUserInfo.setUserInfo(data);
});
profilePopupCreate.setEventListeners();

const cardPopupCreate = new PopupWithForm(cardPopup, (data) => {
  section.addItem(data);
});
cardPopupCreate.setEventListeners();

const createPopupImage = new PopupWithImage(showPopupImage);
createPopupImage.setEventListeners();

//функция открытия картинки. Используем метод .open экземпляра класса PopupWithImage
const handleCardClick = (cardData) => {
  createPopupImage.open(cardData);
};

//генерируем карточки на странице. Создаем экземпляр класса Card, внутри создания экземпляра Section.
const section = new Section(
  {
    items: initialCards,
    renderer: (element) => {
      const card = new Card(element, "#card_template", handleCardClick);
      const generatedCard = card.generateCard();
      section.addItem(generatedCard);
    },
  },
  cardContainer
);
section.renderItems();

//слушатели для отрытия, наполнения и закрытия попапа profile
profileEditButton.addEventListener("click", function () {
  profilePopupCreate.open();
  const collectUserInfo = createUserInfo.getUserInfo();
  nameInput.value = collectUserInfo.name;
  jobInput.value = collectUserInfo.job;
  validatePopupProfile.resetErrors();
});

//Закрытие попапа profile и запись значений в верстку
// formProfileElement.addEventListener("submit", function (event) {
//   event.preventDefault();
//   profileInfoTitle.textContent = nameInput.value;
//   profileInfoSubtitle.textContent = jobInput.value;
//   profilePopupCreate.close();
// });

//слушатели для открытия и закрытия попапа card
profileAddButton.addEventListener("click", function () {
  cardPopupCreate.open();
  validatePopupCard.resetErrors();
});

// //этот слушатель запишет значения полей ввода в объект { name, link }. Объект будет использован в prependCard.
// formCardElement.addEventListener("submit", function (event) {
//   event.preventDefault();
//   //создаю объект, который буду передавать в функцию prependCard
//   const object = {
//     name: titleInputCard.value,
//     link: linkInputCard.value,
//   };
//   const newCard = createCard(object);
//   prependCard(newCard);
//   event.target.reset();
//   closePopup(cardPopup);
// });

// ---------------------------------------------VALIDATION-------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------

//создаем два экземпляра класса FormValidator
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
