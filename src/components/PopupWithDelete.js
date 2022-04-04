import Popup from './Popup.js'

export default class PopupWithDelete extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this.popupSubmitForm = this.popup.querySelector('.popup__form');

      }

    changeSubmitHandler(newHandler) {
        this._handleFormSubmit = newHandler;
    }

    setEventListeners() {
        super.setEventListeners();
        this.popupSubmitForm.addEventListener('submit', this._handleSubmit)
    }

    _handleSubmit = (e) => {
      e.preventDefault();
      this._handleFormSubmit();
    }




}
