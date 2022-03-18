export { Card }
 class Card {
   constructor(data, tempSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._tempSelector = tempSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._tempSelector).content;
    return cardElement.querySelector('.elements__card').cloneNode(true);
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector('.elements__element-title').textContent = this._name;
    return this._element;
  }

  _handleLikeButton() {
    this._likeButton.classList.toggle('elements__element-button_aktive');
}

  _handleRemoveButtonClick() {
    this._element.remove()
    this._element = null;
}

  _setEventListeners() {
    this._cardImage = this._element.querySelector('.elements__rectagle');
    this._likeButton = this._element.querySelector('.elements__element-button');
    this._deleteButton = this._element.querySelector('.elements__delete-button');

   this._cardImage.addEventListener('click', () => {
         this._handleCardClick(this._name, this._link)
      });
    this._likeButton.addEventListener('click', (evt) => {
      this._handleLikeButton(evt);
    });
    this._deleteButton.addEventListener('click', (evt) => {
      this._handleRemoveButtonClick(evt);
    });
  }
}


