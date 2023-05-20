//импорт классов
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { Popup } from "../components/Popup.js";

//импорт всех переменных.
import {
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

const showImagePopup = function (object) {
  popupImageHeading.textContent = object.name;
  popupImage.alt = object.name;
  popupImage.src = object.link;
  openPopup(showPopupImage);
};

const profilePopupCreate = new Popup(profilePopup);
profilePopupCreate.setEventListeners();


//генерируем карточки на странице. Создаем экземпляр класса Card, внутри создания экземпляра Section.
const section = new Section(
  {
    items: initialCards,
    renderer: (element) => {
      const card = new Card(element, "#card_template", showImagePopup);
      const generatedCard = card.generateCard();
      section.addItem(generatedCard);
    },
  },
  cardContainer
);
section.renderItems();




// popups.forEach((popup) => {
//   popup.addEventListener("mousedown", closeByClickOnOverlay);
// });

// //функция закрытия любого попапа с классом .popup
// closeButtons.forEach((button) => {
//   // находим 1 раз ближайший к крестику попап
//   const popup = button.closest(".popup");
//   // устанавливаем обработчик закрытия на крестик
//   button.addEventListener("click", () => closePopup(popup));
// });



//слушатели для отрытия, наполнения и закрытия попапа profile
profileEditButton.addEventListener("click", function () {
  profilePopupCreate.open();
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
  profilePopupCreate.close();
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
  const newCard = createCard(object);
  prependCard(newCard);
  event.target.reset();
  closePopup(cardPopup);
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
