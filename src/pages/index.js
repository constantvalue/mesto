import "./index.css";
//импорт классов
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { UserInfo } from "../components/UserInfo.js";
import { Api } from "../components/Api.js";

//импорт всех переменных.
import { userInfoObj, profileEditButton, profileAddButton, formProfileElement, formCardElement, cardContainer, avatarPopupButton, profileAvatarImage, formAvatarElement } from "../utils/constants.js";

//импорт объекта с "настройками" валидации
import { validationConfig } from "../utils/constants.js";

// --------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-66",
  headers: {
    authorization: "37444284-40d0-47c4-870b-23d568f81278",
    "Content-Type": "application/json",
  },
});

Promise.all([api.getUserData(), api.getInitialCards()]).then((res) => {
  const [userData, cardData] = res;
  cardData.forEach((item) => {
    item.myId = userData._id;
  });
  userInfo.setUserInfo({ name: userData.name, job: userData.about, avatar: userData.avatar });
  section.renderItems(cardData);
});


const userInfo = new UserInfo(userInfoObj);

const profilePopupCreate = new PopupWithForm(".popup-profile", (data) => {
  api
    .userInfoPatch(data)
    .then((res) => {
      userInfo.setUserInfo({ name: res.name, job: res.about, avatar: res.avatar });
    })
    .catch((error) => {
      console.log(error);
    });
});
profilePopupCreate.setEventListeners();

const popupImage = new PopupWithImage(".popup-image");
popupImage.setEventListeners();

//функция открытия картинки. Используем метод .open экземпляра класса PopupWithImage
const handleCardClick = (cardData) => {
  popupImage.open(cardData);
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
    renderer: createCard,
  },
  cardContainer
);

//создаем экземпляр класса попапа Card.
const cardPopupCreate = new PopupWithForm(".popup-card", (cardData) => {
  createCard(cardData);
});
cardPopupCreate.setEventListeners();

//слушатель попапа Profile. Открываем и записываем значения. Сбрасываем ошибки валидации.
profileEditButton.addEventListener("click", function () {
  profilePopupCreate.open();
  profilePopupCreate.setInputValues(userInfo.getUserInfo());
  popupProfileValidator.resetErrors();
});

//Слушатель для кнопки добавления (попап Card)
profileAddButton.addEventListener("click", function () {
  cardPopupCreate.open();
  popupCardValidator.resetErrors();
});

// ---------------------------------------------VALIDATION-------------------------------------------------------------------

//создаем включаем валидацию на формах.
const popupProfileValidator = new FormValidator(validationConfig, formProfileElement);
popupProfileValidator.enableValidation();

const popupCardValidator = new FormValidator(validationConfig, formCardElement);
popupCardValidator.enableValidation();

const popupAvatarValidator = new FormValidator(validationConfig, formAvatarElement);
popupAvatarValidator.enableValidation();

// навешиваем слушатели и создаем экземпляр попапа для смены аватарки
avatarPopupButton.addEventListener("click", () => avatarPopupCreate.open());

const avatarPopupCreate = new PopupWithForm(".popup-avatar", (inputData) => {
  profileAvatarImage.src = inputData.avatar;
});
avatarPopupCreate.setEventListeners();

// --------------------------------------------------------------------------

