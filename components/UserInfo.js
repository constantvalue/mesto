export class UserInfo {
  constructor(userInfoObj) {
    this._username = userInfoObj.name;
    this._description = userInfoObj.job;
  }

  getUserInfo() {
    return {
      name: this._username.textContent,
      job: this._description.textContent,
    };
  }

  setUserInfo(userData) {
    this._username.textContent = userData.name;
    this._description.textContent = userData.job;
  }
}
