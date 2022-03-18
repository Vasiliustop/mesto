import Popup from './Popup.js'
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
     super(popupSelector)
     this._image = this.popup.querySelector('.popup__picture');
     this.name = this.popup.querySelector('.popup__picture-description');
  }

  open(name, link) {

     this._image.src = link;
     this._image.alt = name;
     this.name.textContent = name;
     super.open();
  }
}

