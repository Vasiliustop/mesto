export default class UserInfo {
  constructor({ profileName, profileJob, profileAvatar }) {
    this._nameProf = profileName;
    this._jobProf = profileJob;
    this._profAvatar = profileAvatar;
  }

  getUserInfo() {
    return {
      name: this._nameProf.textContent,
      job: this._jobProf.textContent,
      avatar: this._profAvatar.src
    };


  }

  setUserInfo(name, about) {
    this._nameProf.textContent = name;
    this._jobProf.textContent = about;
  }

  setAvatarInfo(avatar) {
    this._profAvatar.src = avatar
  }
}
