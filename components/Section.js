export class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._containerSelector = containerSelector;
  }

  //оба метода по аналогии с классом Section из тренажера курса.

  addItem(item) {
    this._containerSelector.prepend(item);
  }

  renderItems() {
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }
}
