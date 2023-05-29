export class Section {
  //items теперь не нужен. Карточки получаем от сервера.
  constructor({ renderer }, container) {
    this._renderer = renderer;
    this._container = container;
  }

  //оба метода по аналогии с классом Section из тренажера курса.

  addItem(item) {
    this._container.prepend(item);
  }

  //перевернули массив карточек при рендере с помощью метода reverse
  renderItems(card) {
    card.reverse().forEach((item) => {
      this._renderer(item);
    });
  }
}
