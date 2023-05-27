export class Card {
  constructor(initialCard, cardTemplateSelector, showImagePopup, handleDeleteCard) {
    this._myId = initialCard.myId;
    this._ownerId = initialCard.owner._id;
    this._initialCard = initialCard;
    this._cardTemplateSelector = cardTemplateSelector;
    this._showImagePopup = showImagePopup;
    this._handleDeleteCard = handleDeleteCard;
  }

  _getTemplate() {
    //получаем темплейт и записываем в переменную. По аналогии с тренажером.
    const cardElement = document.querySelector(this._cardTemplateSelector).content.querySelector(".element").cloneNode(true);
    return cardElement;
  }

  //публичный метод для создания экземпляров класса.
  generateCard() {
    //клонируем темплейт для перезаписи значений
    this._element = this._getTemplate();
    this._buttonLike = this._element.querySelector(".element__like-button");
    this._image = this._element.querySelector(".element__image");
    this._image.alt = this._initialCard.name;
    this._image.src = this._initialCard.link;
    this._element.querySelector(".element__title").textContent = this._initialCard.name;
    //навешиваем слушатели с помощью приватного метода.
    this._setEventListeners();
    this._isTrashButtonVisible();
    //возвращаем ноду с новыми значениями.
    return this._element;
  }

    //условная конструкция, проверяющая совпадение айдишников (мой айдишник, который я записываю с помощью метода forEach в Promise.all и айдишник из массива карточек сервера)
    _isTrashButtonVisible() {
      if (this._myId === this._ownerId) {
        this._element.querySelector(".element__trash-button").classList.add('element___trash-button_visibility_visible')
      }
    }


  //создадим приватный метод из функции, которую передали в конструктор в качестве аргумента.
  _showImageOnClick = () => {
    this._showImagePopup(this._initialCard);
  };


  _deleteCard() {
    this._element.remove();
    this._element = null;
  }

  _toggleLike() {
    this._buttonLike.classList.toggle("element__like-button_active");
  }

  //навешиваем слушатели на все возможные события внутри карточки.
  _setEventListeners() {
    this._image.addEventListener("click", () => this._showImageOnClick());

    this._element.querySelector(".element__trash-button").addEventListener("click", () => this._deleteCard());

    this._element.querySelector(".element__like-button").addEventListener("click", () => this._toggleLike());
  }
}
