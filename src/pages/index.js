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
import { userInfoObj, profileEditButton, profileAddButton, formProfileElement, formCardElement, cardContainer, avatarPopupButton, formAvatarElement } from "../utils/constants.js";

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
//один раз получим информацию о пользователе и отрендерим 30 карточек, полученных с помощью GET запроса.
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
    .then(() => {
      profilePopupCreate.close();
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      profilePopupCreate.setDefaultTextState();
    });
});
profilePopupCreate.setEventListeners();

// навешиваем слушатели и создаем экземпляр попапа для смены аватарки
avatarPopupButton.addEventListener("click", () => {
  avatarPopupCreate.open();
  formValidators[formAvatarElement.getAttribute("name")].resetErrors();
});

const avatarPopupCreate = new PopupWithForm(".popup-avatar", (inputData) => {
  api
    .updateAvatar(inputData)
    .then((res) => {
      userInfo.setUserInfo(res);
    })
    .then(() => {
      avatarPopupCreate.close();
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      avatarPopupCreate.setDefaultTextState();
    });
});

avatarPopupCreate.setEventListeners();

const popupImage = new PopupWithImage(".popup-image");
popupImage.setEventListeners();

//функция открытия картинки. Используем метод .open экземпляра класса PopupWithImage
const handleCardClick = (cardData) => {
  popupImage.open(cardData);
};

function getCard(element) {
  const card = new Card(
    element,
    "#card_template",
    handleCardClick,
    (element) => {
      //Это функция коллбек сабмита попапа удаления карточки.
      popupWithDelete.open();
      popupWithDelete.setSubmitAction(() => {
        api
          .cardDelete(element)
          .then(() => {
            card.removeCard();
          })
          .then(() => {
            popupWithDelete.close();
          })
          .catch((error) => {
            console.log(error);
          });
      });
    },
    //коллбек хендлера установки лайка
    (element) => {
      api
        .likeCard(element)
        .then((res) => {
          card.renderLikes(res.likes);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // коллбек хендлера удаления лайка
    (element) => {
      api
        .deleteLike(element)
        .then((res) => {
          card.renderLikes(res.likes);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  );
  const generatedCard = card.generateCard();
  return generatedCard;
}

const createCard = (element) => {
  const generatedCard = getCard(element);
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
    .then(() => {
      cardPopupCreate.close();
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      cardPopupCreate.setDefaultTextState();
    });
});
cardPopupCreate.setEventListeners();

//слушатель попапа Profile. Открываем и записываем значения. Сбрасываем ошибки валидации.
profileEditButton.addEventListener("click", function () {
  profilePopupCreate.open();
  profilePopupCreate.setInputValues(userInfo.getUserInfo());
  formValidators[formProfileElement.getAttribute("name")].resetErrors();
});

//Слушатель для кнопки добавления (попап Card)
profileAddButton.addEventListener("click", function () {
  cardPopupCreate.open();
  formValidators[formCardElement.getAttribute("name")].resetErrors();
});

// ---------------------------------------------VALIDATION-------------------------------------------------------------------

const formValidators = {};

// Включение валидации
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement);
    // получаем данные из атрибута `name` у формы
    const formName = formElement.getAttribute("name");

    // вот тут в объект записываем под именем формы
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

enableValidation(validationConfig);

// // --------------------------------------------------------------------------

