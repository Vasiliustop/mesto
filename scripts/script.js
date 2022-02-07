const profileOpenButton = document.querySelector('.profile__edit-button');              // редактирование профиля
const overActiveClass = 'popup_active';
const profilePopup = document.querySelector('.popup_profile');
const closeButtons = document.querySelectorAll('.popup__close-button');           // кнопки закрытия попапов.
const addImage = document.querySelector('.profile__add-button');                 // кнопка добавления карточек
const addCardPopup = document.querySelector('.popup_type_place');                // попап добавления карт

const overlays = document.querySelectorAll('.popup')
overlays.forEach((pop) => {
  pop.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains(overActiveClass)) {
          closePopup();
      }
  })
});

function openProfilePopup() {
  profileName.value = profTitle.textContent;
  profileJob.value = profSubtitle.textContent;
  openPopup(profilePopup);
};

function openPopup(popup) {
  popup.classList.add(overActiveClass);
  document.addEventListener('keydown', closePopupEsc);
}

profileOpenButton.addEventListener('click', openProfilePopup);

function closePopup() {
  document.removeEventListener('keydown', closePopupEsc);
  const openedPopup = document.querySelector('.popup_active');
  if (openedPopup) {
    openedPopup.classList.remove(overActiveClass);
  }
};

closeButtons.forEach(function (button) {
  button.addEventListener('click', closePopup);
});


function closePopupEsc(evt) {
  if (evt.code === 'Escape') {
    closePopup();
  }
}


const profTitle = document.querySelector('.profile__title');
const profSubtitle = document.querySelector('.profile__subtitle');
const profileName = document.querySelector('.popup__input_type_name');
const profileJob = document.querySelector('.popup__input_type_job');
const profileForm = document.querySelector('.popup__inputform');

function handleProfileFormSubmit (evt) {
  evt.preventDefault();
  profTitle.textContent = profileName.value;
  profSubtitle.textContent = profileJob.value;
  closePopup();
}

profileForm.addEventListener('submit', handleProfileFormSubmit);

const formAddCard = document.querySelector('.popup__inputformcards');    // вторая форма
const nameCard = document.querySelector('.popup__input_type_namecards');    // имя новой карточки
const linkInput = document.querySelector('.popup__input_type_link');         // ссылка для новой карточки
const saveButton = formAddCard.querySelector('.popup__save-button');

function handleAddFormSubmit (evt) {
  evt.preventDefault();
  const pictureObj = {
    name: nameCard.value,
    link: linkInput.value
  };
  saveButton.setAttribute('disabled', 'disabled');
  saveButton.classList.add('popup__button-invalid');
  renderCard(pictureObj)
  closePopup();
  nameCard.value = "";
  linkInput.value = "";
}

formAddCard.addEventListener('submit', handleAddFormSubmit);

const cardTemp = document.querySelector('#card').content;   // константа темплейт
const elements = document.querySelector('.elements');   // блок для вноса данных
const pictureModal = document.querySelector('.popup_type_picture');   // Открытая карточка
const pictureImg = pictureModal.querySelector('.popup__picture');
const pictureDescription = pictureModal.querySelector('.popup__picture-description');

function createCard (item) {

  const cardElement = cardTemp.querySelector('.elements__card').cloneNode(true);   // клонируем содержимое template
  const deleteButton = cardElement.querySelector('.elements__delete-button');  // кнопка удаления
  const likeButton = cardElement.querySelector('.elements__element-button');     // кнопка лайка
  const cardImage = cardElement.querySelector('.elements__rectagle');
  const cardTitle = cardElement.querySelector('.elements__element-title');

  cardImage.src = item.link;
  cardImage.alt = item.name;
  cardTitle.textContent = item.name;


  cardImage.addEventListener('click', handleImageClick);

  deleteButton.addEventListener('click', () => {            // удаление карточки
    cardElement.remove()
  })

  likeButton.addEventListener('click', (evt) => {                 // лайки
    evt.target.classList.toggle('elements__element-button_aktive')
  });

  function handleImageClick() {
    pictureImg.src = item.link;
    pictureImg.alt= item.name;
    pictureDescription.textContent = item.name;
    openImagePopup();
  }

  return cardElement;
}

function renderCard(item) {
  const cardElement = createCard(item)
  elements.prepend(cardElement);
}

initialCards.forEach(renderCard);

function openAddImage() {
  openPopup(addCardPopup);
};

addImage.addEventListener('click', openAddImage);

function openImagePopup () {
  openPopup(pictureModal);
}










