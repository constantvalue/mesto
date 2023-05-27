export class UserInfo {
  //передаю в конструктор ранее созданный объект в constants.js
  constructor(userInfoObj) {
    this._username = userInfoObj.name;
    this._description = userInfoObj.job;
    this._avatar = userInfoObj.avatar;
  }

  getUserInfo() {
    const obj = {
      name: this._username.textContent,
      job: this._description.textContent,
    };
    return obj;
  }

  setUserInfo(userData) {
    this._username.textContent = userData.name;
    this._description.textContent = userData.about;
    this._avatar.src = userData.avatar;
  }

  getId() {
    return this._id;
  }

  setId(id) {
    this._id = id;
  }
}
