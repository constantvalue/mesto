export class Card {
  constructor(initialCards, cardTemplateSelector, showImagePopup) {
    this._initialCards = initialCards;
    this._cardTemplateSelector = cardTemplateSelector;
    this._showImagePopup = showImagePopup;
  }

  _getTemplate() {
    //получаем темплейт и записываем в переменную. По аналогии с тренажером.
    const cardElement = document.querySelector(this._cardTemplateSelector).content.querySelector(".element").cloneNode(true);
    return cardElement;

  }

  generateCard() {
    //клонируем темплейт для перезаписи значений
    this._element = this._getTemplate();
    this._image = this._element.querySelector(".element__image");
    this._image.alt = this._initialCards.name;
    this._image.src = this._initialCards.link;
    this._element.querySelector(".element__title").textContent = this._initialCards.name;
    this._setEventListeners();
    //возвращаем ноду с новыми значениями.
    return this._element;
  }

  //этот метод принимает конструктор. С помощью него открываем попап с картинкой при клике на нее.
  _showImageOnClick() {
    this._showImagePopup(this._initialCards);
  }

  //навешиваем слушатели на все возможные события внутри карточки.
  _setEventListeners() {
    this._image.addEventListener("click", () => this._showImageOnClick());

    this._element.querySelector(".element__trash-button").addEventListener("click", () => this._element.remove());

    this._element.querySelector(".element__like-button").addEventListener("click", (evt) => evt.target.classList.toggle("element__like-button_active"));
  }

}
