const profileOpenButton = document.querySelector('.profile__edit-button');              // редактирование профиля
const overActiveClass = 'popup_active';
const profilePopup = document.querySelector('.popup_profile');
const closeButtons = document.querySelectorAll('.popup__close-button');           // кнопки закрытия попапов.
const addImage = document.querySelector('.profile__add-button');                 // кнопка добавления карточек
const addCardPopup = document.querySelector('.popup_type_place');                // попап добавления карт

function openProfilePopup() {
  profileName.value = profTitle.textContent;
  profileJob.value = profSubtitle.textContent;
  openPopup(profilePopup);
};

function openPopup(popup) {
  popup.classList.add(overActiveClass);
}

profileOpenButton.addEventListener('click', openProfilePopup);

function closePopup() {
  const openedPopup = document.querySelector('.popup_active');
  if (openedPopup) {
    openedPopup.classList.remove(overActiveClass);
  }
};

closeButtons.forEach(function (button) {
  button.addEventListener('click', closePopup);
});

document.addEventListener('keydown', function(evt) {
  if (evt.code === 'Escape') {
    const openedPopup = document.querySelector('.popup_active');
    closePopup(openedPopup);
   }
});

const profTitle = document.querySelector('.profile__title');
const profSubtitle = document.querySelector('.profile__subtitle');
const profileName = document.querySelector('.popup__input_type_name');
const profileJob = document.querySelector('.popup__input_type_job');
const profileForm = document.querySelector('.popup__inputform');

function hanldeProfileFormSubmit (evt) {
  evt.preventDefault();
  profTitle.textContent = profileName.value;
  profSubtitle.textContent = profileJob.value;
  closePopup();

}

profileForm.addEventListener('submit', hanldeProfileFormSubmit);

const formAddCard = document.querySelector('.popup__inputformcards');    // вторая форма
const nameCards = document.querySelector('.popup__input_type_namecards');    // имя новой карточки
const linkInput = document.querySelector('.popup__input_type_link');         // ссылка для новой карточки

function handleAddFormSubmit (evt) {
  evt.preventDefault();
  const pictureObj = {
    name: nameCards.value,
    link: linkInput.value
  };
  renderCard(pictureObj)
  closePopup();
  nameCards.value = "";
  linkInput.value = "";
}

formAddCard.addEventListener('submit', handleAddFormSubmit);

const initialCards = [
  {
    name: 'Кот',
    link: 'image/кот.jpg'
  },
  {
    name: 'Лампочка',
    link: 'image/лампочка.jpg'
  },
  {
    name: 'Новый год',
    link: 'image/newyear.jpg'
  },
  {
    name: 'Форд-мустанг',
    link: 'image/fordmustang.jpg'
  },
  {
    name: 'Лайм',
    link: 'image/лайм.jpg'
  },
  {
    name: 'Облака',
    link: 'image/nebo.jpg'
  }
];
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










