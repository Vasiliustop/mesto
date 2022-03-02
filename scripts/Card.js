import { openImagePopup } from './index.js';
export { Card }
 class Card {
   constructor(data, tempSelector) {
    this.name = data.name;
    this.link = data.link;
    this.tempSelector = tempSelector;
  }

  getTemplate() {
    const cardElement = document.querySelector(this.tempSelector).content;
    return cardElement.querySelector('.elements__card').cloneNode(true);
  }

  generateCard() {
    this.element = this.getTemplate();
    this.element.querySelector('.elements__rectagle').src = this.link;
    this.element.querySelector('.elements__rectagle').alt = this.name;
    this.element.querySelector('.elements__element-title').textContent = this.name;
    this.setEventListeners();
    return this.element;
  }

  methodCardImageClick() {
    const cardImage = document.querySelector('.popup__picture');
    const cardTitle = document.querySelector('.popup__picture-description');
    cardImage.src = this.link;
    cardImage.alt = this.name;
    cardTitle.textContent = this.name;
    openImagePopup()
}

  methodLikeButton(evt) {
    evt.target.classList.toggle('elements__element-button_aktive');
}

  methodRemoveButtonClick() {
    this.element.remove()
}

  setEventListeners() {
    const cardImage = this.element.querySelector('.elements__rectagle');
    const likeButton = this.element.querySelector('.elements__element-button');
    const deleteButton = this.element.querySelector('.elements__delete-button');

    cardImage.addEventListener('click', (evt) => {
      this.methodCardImageClick(evt);
    });
    likeButton.addEventListener('click', (evt) => {
      this.methodLikeButton(evt);
    });
    deleteButton.addEventListener('click', (evt) => {
      this.methodRemoveButtonClick(evt);
    });
  }
}



