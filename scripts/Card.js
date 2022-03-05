import { openImagePopup, cardImage, cardTitle } from './index.js';
export { Card }
 class Card {
   constructor(data, tempSelector) {
    this._name = data.name;
    this._link = data.link;
    this._tempSelector = tempSelector;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._tempSelector).content;
    return cardElement.querySelector('.elements__card').cloneNode(true);
  }

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.elements__rectagle').src = this._link;
    this._element.querySelector('.elements__rectagle').alt = this._name;
    this._element.querySelector('.elements__element-title').textContent = this._name;
    this._setEventListeners();
    return this._element;
  }

  _methodCardImageClick() {
    cardImage.src = this._link;
    cardImage.alt = this._name;
    cardTitle.textContent = this._name;
    openImagePopup()
}

  _methodLikeButton() {
    this._likeButton.classList.toggle('elements__element-button_aktive');
}

  _methodRemoveButtonClick() {
    this._element.remove()
    this._element = null;
}

  _setEventListeners() {
    this._cardImage = this._element.querySelector('.elements__rectagle');
    this._likeButton = this._element.querySelector('.elements__element-button');
    this._deleteButton = this._element.querySelector('.elements__delete-button');

    this._cardImage.addEventListener('click', (evt) => {
      this._methodCardImageClick(evt);
    });
    this._likeButton.addEventListener('click', (evt) => {
      this._methodLikeButton(evt);
    });
    this._deleteButton.addEventListener('click', (evt) => {
      this._methodRemoveButtonClick(evt);
    });
  }
}



