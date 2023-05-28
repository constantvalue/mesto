import "./index.css";
//импорт классов
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { UserInfo } from "../components/UserInfo.js";
import { Api } from "../components/Api.js";
import { PopupWithDeleteButton } from "../components/PopupWithDeleteButton.js";

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

Promise.all([api.getUserData(), api.getInitialCards()])
  .then((res) => {
    const [userData, cardData] = res;
    userInfo.setId(userData._id);
    userInfo.setUserInfo(userData);
    cardData.forEach((item) => {
        //на каждой итерации создадим поле myId в объекте карточки. В значение записываем мой айдишник.
        //это будет использовано для метода лайков.
        //также это используется для условной конструкции, которая проверяет необходимость отрисовки на карточке иконки урны.
      item.myId = userData._id;
    });
    section.renderItems(cardData);
  })
  .catch((error) => {
    console.log(error);
  });

const popupWithDelete = new PopupWithDeleteButton(".popup-delete");
popupWithDelete.setEventListeners();

const userInfo = new UserInfo(userInfoObj);

const profilePopupCreate = new PopupWithForm(".popup-profile", (data) => {
  api
    .userInfoPatch(data)
    .then((res) => {
      userInfo.setUserInfo(res);
    })
    .catch((error) => {
      console.log(error);
    });
});
profilePopupCreate.setEventListeners();

// навешиваем слушатели и создаем экземпляр попапа для смены аватарки
avatarPopupButton.addEventListener("click", () => avatarPopupCreate.open());

const avatarPopupCreate = new PopupWithForm(".popup-avatar", (inputData) => {
  api
    .updateAvatar(inputData)
    .then((res) => {
      userInfo.setUserInfo(res);
    })
    .catch((error) => {
      console.log(error);
    });
});

avatarPopupCreate.setEventListeners();

const popupImage = new PopupWithImage(".popup-image");
popupImage.setEventListeners();

//функция открытия картинки. Используем метод .open экземпляра класса PopupWithImage
const handleCardClick = (cardData) => {
  popupImage.open(cardData);
};

const createCard = (element) => {
  const card = new Card(element, "#card_template", handleCardClick, (element) => {
    //Это функция коллбек сабмита попапа удаления карточки.
    popupWithDelete.open();
    popupWithDelete.setSubmitAction(() => {
      api
        .cardDelete(element)
        .then(() => {
          card.removeCard();
        })
        .catch((error) => {
          console.log(error);
        });
    });
  });
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
  api
    .addCardOnServer(cardData)
    .then((data) => {
      data.myId = userInfo.getId();
      createCard(data);
    })
    .catch((error) => {
      console.log(error);
    });
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

// --------------------------------------------------------------------------
