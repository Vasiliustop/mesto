  export default class Popup {
  constructor(popupSelector) {
  this.popup = document.querySelector(popupSelector);
  this._handleEscClose = this._handleEscClose.bind(this);
}

open() {
  this.popup.classList.add('popup_active');
  document.addEventListener('keydown', this._handleEscClose);
}

close() {
  this.popup.classList.remove('popup_active');
  document.removeEventListener('keydown', this._handleEscClose);
}

_handleEscClose(evt) {
  if (evt.code === 'Escape') {
    this.close();
  }
}


setEventListeners() {
  this.popup.addEventListener('click', (evt) => {
    if ((evt.target.classList.contains('popup_active')) || (evt.target.classList.contains('popup__close-button')) )
    this.close()
  })


}}
