export class Card {
  constructor(initialCard, cardTemplateSelector, showImagePopup, cardDeleteCallback, likesHandler, dislikeHandler) {
    this._myId = initialCard.myId;
    this._cardId = initialCard._id;
    this._ownerId = initialCard.owner._id;
    this._initialCard = initialCard;
    this._cardTemplateSelector = cardTemplateSelector;
    this._showImagePopup = showImagePopup;
    this._cardDeleteCallback = cardDeleteCallback;
    this._likesHandler = likesHandler;
    this._likesArray = initialCard.likes;
    this._dislikeHandler = dislikeHandler;
  }

  _getTemplate() {
    //получаем темплейт и записываем в переменную. По аналогии с тренажером.
    const cardElement = document.querySelector(this._cardTemplateSelector).content.querySelector(".element").cloneNode(true);
    return cardElement;
  }
//проверяем есть ли в массиве лайков упоминание моего айдишника, который объявлен в конструкторе.
  isLikedByMe = () => {
    return this._likesArray.some((item) => {
      return item._id === this._myId;
    });
  };

  //метод, в который попадет res из промиса.
  renderLikes(likes) {
    this._likesArray = likes;
    this._likeCount.textContent = this._likesArray.length;
    if (this.isLikedByMe()) {
      this._buttonLike.classList.add("element__like-button_active");
    } else {
      this._buttonLike.classList.remove("element__like-button_active");
    }
  }

  //вызовем этот метод на экземпляре чтобы отрисовать лайки при загрузке страницы.
  _likeToggleOnPageLoad = () => {
    if (this.isLikedByMe()) {
      this._buttonLike.classList.add("element__like-button_active");
    } else {
      this._buttonLike.classList.remove("element__like-button_active");
    }
  };

  //публичный метод для создания экземпляров класса.
  generateCard() {
    //клонируем темплейт для перезаписи значений
    this._element = this._getTemplate();
    this._buttonLike = this._element.querySelector(".element__like-button");
    this._likeCount = this._element.querySelector(".element__like-button-counter");
    this._image = this._element.querySelector(".element__image");
    this._image.alt = this._initialCard.name;
    this._image.src = this._initialCard.link;
    this._element.querySelector(".element__title").textContent = this._initialCard.name;
    //навешиваем слушатели с помощью приватного метода.
    this._isTrashButtonVisible();
    this._likeCount.textContent = this._likesArray.length;
    this._likeToggleOnPageLoad();
    this._setEventListeners();

    //возвращаем ноду с новыми значениями.
    return this._element;
  }

  //условная конструкция, проверяющая совпадение айдишников (мой айдишник, который я записываю с помощью метода forEach в Promise.all и айдишник из массива карточек сервера)
  _isTrashButtonVisible() {
    if (this._myId === this._ownerId) {
      this._element.querySelector(".element__trash-button").classList.add("element___trash-button_visibility_visible");
    }
  }

  //создадим приватный метод из функции, которую передали в конструктор в качестве аргумента.
  _showImageOnClick = () => {
    this._showImagePopup(this._initialCard);
  };

  //Метод переименовал чтобы не путать с Api.cardDelete()
  removeCard() {
    this._element.remove();
    this._element = null;
  }

  //навешиваем слушатели на все возможные события внутри карточки.
  _setEventListeners() {
    this._image.addEventListener("click", () => this._showImageOnClick());

    this._element.querySelector(".element__trash-button").addEventListener("click", () => this._cardDeleteCallback(this));

    this._element.querySelector(".element__like-button").addEventListener("click", () => {
      if (this.isLikedByMe()) {
        this._dislikeHandler(this);
      } else {
        this._likesHandler(this);
      }
    });
  }
}
