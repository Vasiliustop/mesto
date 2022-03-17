import Popup from './Popup.js'
export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this.submitForm = submitForm;
    this.popupFormSelector = this.popup.querySelector('.popup__form');
    this.inputListSelector = this.popup.querySelectorAll('.popup__input');
  }

  _getInputValues () {
    this.inputValues = {};
    this.inputListSelector.forEach(input => {
    this.inputValues[input.name] = input.value;
    });
    return this.inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this.popupFormSelector.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.submitForm(this._getInputValues());
    });
}

close() {
  super.close();
  this.popupFormSelector.reset();
}

}

