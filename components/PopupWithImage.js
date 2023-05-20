import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImg = this._popupSelector.querySelector(".popup__image");
    this._imageHeading = this._popupSelector.querySelector(".popup__image-heading");
    console.log(this._popupSelector);
  }

  open = (data) => {
    super.open();
    this._imageHeading.textContent = data.name;
    this._popupImg.src = data.link;
    this._popupImg.alt = data.name;
  };
}
