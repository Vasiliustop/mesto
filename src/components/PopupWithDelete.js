import Popup from './Popup.js'

export default class PopupWithDelete extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
      }

    changeSubmitHandler(data) {
        this._handleFormSubmit = data;
    }

    setEventListeners() {
        super.setEventListeners();
        this.popupSubmitButton.addEventListener('mousedown', this._handleSubmit)
    }

    _handleSubmit = (e) => {
      e.preventDefault();
      this._handleFormSubmit();
    }




}
