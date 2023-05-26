export class Section {
  //items теперь не нужен. Карточки получаем от сервера.
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._containerSelector = containerSelector;
  }

  //оба метода по аналогии с классом Section из тренажера курса.

  addItem(item) {
    this._containerSelector.prepend(item);
  }

  renderItems(card) {
    card.forEach((item) => {
      this._renderer(item);
    });
  }
}
