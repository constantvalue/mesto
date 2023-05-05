export class Card {
  constructor(initialCards, cardTemplateSelector, showImagePopup) {
    this._initialCards = initialCards;
    this._cardTemplateSelector = cardTemplateSelector;
    this._showImagePopup = showImagePopup;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._cardTemplateSelector).content.querySelector("#card").cloneNode(true);
    return cardElement;

  }

  generateCard() {
    this._element = this._getTemplate();
    this._image = this._element.querySelector(".element__image");
    this._image.src = this._initialCards.link;
    this._image.alt = this._initialCards.name;
    this._element.querySelector(".element__title").textContent = this._initialCards.name;

    // this._setEventListeners();

    return this._element;
  }

  // _showImageOnClick() {
  //   this._showImagePopup(this._initialCards);
  // }

  // _setEventListeners() {
  //   this._image.addEventListener("click", () => this._showImagePopup());

  //   this._element.querySelector(".element__trash-button").addEventListener("click", () => this._removeCard());

  // }

  // _removeCard() {
  //   this._element.remove();
  // }
}
