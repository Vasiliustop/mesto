export default class UserInfo {
  constructor({ profileName, profileJob }) {
     this._nameProf = profileName;
     this._jobProf = profileJob;
  }

  getUserInfo() {
    return {
        name: this._nameProf.textContent,
        job: this._jobProf.textContent
     };

     
  }

  setUserInfo({ name, job }) {
     this._nameProf.textContent = name;
     this._jobProf.textContent = job;
  }
}
