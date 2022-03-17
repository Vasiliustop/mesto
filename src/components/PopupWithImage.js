import Popup from './Popup.js'
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
     super(popupSelector)
     this.image = this.popup.querySelector('.popup__picture');
     this.name = this.popup.querySelector('.popup__picture-description');
  }

  open(name, link) {

     this.image.src = link;
     this.image.alt = name;
     this.name.textContent = name;
     super.open();
  }
}

