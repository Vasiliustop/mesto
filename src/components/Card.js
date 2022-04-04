export { Card }
 class Card {
   constructor(data, tempSelector, userId, handleCardClick, handleLikeClick, handleCardDelete ) {
    this._name = data.name;
    this._link = data.link;
    this._tempSelector = tempSelector;
    this._handleCardClick = handleCardClick;
    this._likes = data.likes;
    this._handleLikeClick = handleLikeClick;
    this._ownerId = data.owner._id
    this._id = data._id;
    this._userId = userId;
    this._handleCardDelete = handleCardDelete;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._tempSelector).content;
    return cardElement.querySelector('.elements__card').cloneNode(true);
  }

  getLike() {
    const comparisonUser = this._likes.find(user =>
      user._id === this._userId)
    return comparisonUser
  }

  setLikes(data) {
    this._likes = data
    this._likeCountsElement.textContent = this._likes.length

    if (this.getLike()) {
      this._likeButton.classList.add('elements__element-button_aktive')
    } else {
      this._likeButton.classList.remove('elements__element-button_aktive')
    }
  }


  generateCard(res) {
    this._element = this._getTemplate();
    this._likeButton = this._element.querySelector('.elements__element-button');
    this._likeCountsElement = this._element.querySelector('.elements__like-counter')
    this._deleteButton = this._element.querySelector('.elements__delete-button');
    this._setEventListeners();
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector('.elements__element-title').textContent = this._name;
    this.setLikes(this._likes);

    if (this._ownerId !== this._userId) {
      this._deleteButton.style.visibility = 'hidden'
    }

    return this._element;
  }

   handleRemoveButtonClick() {
    this._element.remove()
    this._element = null;
}

  _setEventListeners() {
    this._cardImage = this._element.querySelector('.elements__rectagle');
     this._cardImage.addEventListener('click', () => {
    this._handleCardClick(this._name, this._link)
      });

      this._likeButton.addEventListener('click', () => this._handleLikeClick(this._id));
      this._deleteButton.addEventListener("click", () => {
        this._handleCardDelete(this._id)
      });
  }
}
