//импорт классов
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
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

// --------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------

const createUserInfo = new UserInfo(userInfoObj);

const profilePopupCreate = new PopupWithForm(profilePopup, (data) => {
  createUserInfo.setUserInfo(data);
});
profilePopupCreate.setEventListeners();

const createPopupImage = new PopupWithImage(showPopupImage);
createPopupImage.setEventListeners();

//функция открытия картинки. Используем метод .open экземпляра класса PopupWithImage
const handleCardClick = (cardData) => {
  createPopupImage.open(cardData);
};

// эта функция послужит рендерером для Section.
const createCard = (element) => {
  const card = new Card(element, "#card_template", handleCardClick);
  const generatedCard = card.generateCard();
  section.addItem(generatedCard);
};

//генерируем карточки на странице.
const section = new Section(
  {
    items: initialCards,
    renderer: createCard,
  },
  cardContainer
);
section.renderItems();

//создаем экземпляр класса попапа Card.
const cardPopupCreate = new PopupWithForm(cardPopup, (data) => {
  createCard(data);
});
cardPopupCreate.setEventListeners();

//слушатель попапа Profile. Открываем и записываем значения. Сбрасываем ошибки валидации.
profileEditButton.addEventListener("click", function () {
  profilePopupCreate.open();
  const collectUserInfo = createUserInfo.getUserInfo();
  nameInput.value = collectUserInfo.name;
  jobInput.value = collectUserInfo.job;
  validatePopupProfile.resetErrors();
});

//Слушатель для кнопки добавления (попап Card)
profileAddButton.addEventListener("click", function () {
  cardPopupCreate.open();
  validatePopupCard.resetErrors();
});

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
