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

  //перевернули массив карточек при рендере с помощью метода reverse
  renderItems(card) {
    card.reverse().forEach((item) => {
      this._renderer(item);
    });
  }
}
