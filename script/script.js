let profileEditButton = document.querySelector(".profile__edit-button");
let profileAddButton = document.querySelector(".profile__add-button");
let profileInfoTitle = document.querySelector(".profile__title");
let profileInfoSubtitle = document.querySelector(".profile__subtitle");
let popupFrame = document.querySelector(".popup");
let popupSubmitButton = document.querySelector(".popup__submit-button");
let popupCloseButton = document.querySelector(".popup__close-button");
// Находим форму в DOM
let formElement = document.querySelector(".popup__container");
// Находим поля формы в DOM
let nameInput = formElement.querySelector("#name");
let jobInput = formElement.querySelector("#job");

function openPopup() {
  popupFrame.classList.add("popup_opened");
  nameInput.value = profileInfoTitle.textContent;
  jobInput.value = profileInfoSubtitle.textContent;
}

function closePopup() {
  popupFrame.classList.remove("popup_opened");
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileInfoTitle.textContent = nameInput.value;
  profileInfoSubtitle.textContent = jobInput.value;
  closePopup();
}

profileEditButton.addEventListener("click", openPopup);
popupCloseButton.addEventListener("click", closePopup);
formElement.addEventListener("submit", handleFormSubmit);
