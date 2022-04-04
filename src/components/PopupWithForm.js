import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this.submitForm = submitForm;
    this._popupForm = this.popup.querySelector('.popup__form');
    this._inputList = this.popup.querySelectorAll('.popup__input');
    this.popupSubmitButton = this.popup.querySelector('.popup__save-button');
  }
 _getInputValues () {
    this.inputValues = {};
    this._inputList.forEach(input => {
    this.inputValues[input.name] = input.value;
    });
    return this.inputValues;
  }
 setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.submitForm(this._getInputValues());
    });
}

renderLoading(data) {
  if (data) {
    this.popupSubmitButton.textContent = "Сохранение...";
  }
  else {
    this.popupSubmitButton.textContent = "Сохранить";
  }
}


close() {
  super.close();
  this._popupForm.reset();
}
}
