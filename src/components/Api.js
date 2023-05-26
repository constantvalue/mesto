export class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

//приватный метод с условной конструкцией, возвращающей реджект с текстом ошибки.
  _returnResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject("Ошибка" + res.status);
  }

  //публичный метод класса API для GET запроса данных пользователя
  getUserData() {
    return fetch(this._baseUrl + "/users/me", {headers: this._headers}).then(this._returnResponse)
  }

  //публичный метод класса API для GET запроса массива карточек
  getCardsData() {
    return fetch(this._baseUrl + "/cards", {headers: this._headers}).then(this._returnResponse)
  }



}

