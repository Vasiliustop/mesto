import { Card } from './Card.js'
export { openImagePopup, cardImage, cardTitle }

import { FormValidator } from './FormValidator.js'
const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  inputErrorClass: 'popup__error',
  submitButtonSelector: '.popup__save-button',
  submitButtonErrorClass: 'popup__button-invalid',
}

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

const elementSection = document.querySelector('.elements');
const profileOpenButton = document.querySelector('.profile__edit-button');              // редактирование профиля
const overActiveClass = 'popup_active';
const profilePopup = document.querySelector('.popup_profile');                     //  попап профиля
const closeButtons = document.querySelectorAll('.popup__close-button');           // кнопки закрытия попапов.
const addImage = document.querySelector('.profile__add-button');                 // кнопка добавления карточек
const addCardPopup = document.querySelector('.popup_type_place');                // попап добавления карт
const profTitle = document.querySelector('.profile__title');
const profSubtitle = document.querySelector('.profile__subtitle');
const profileName = document.querySelector('.popup__input_type_name');
const profileJob = document.querySelector('.popup__input_type_job');
const profileForm = document.querySelector('.popup__inputform');
const formAddCard = document.querySelector('.popup__inputformcards');    // вторая форма
const nameCard = document.querySelector('.popup__input_type_namecards');    // имя новой карточки
const linkInput = document.querySelector('.popup__input_type_link');         // ссылка для новой карточки
const pictureModal = document.querySelector('.popup_type_picture');   // Открытая карточка
const overlays = document.querySelectorAll('.popup')
const cardImage = document.querySelector('.popup__picture');
const cardTitle = document.querySelector('.popup__picture-description');

const formProfileValidator = new FormValidator(settings, profileForm);
const formCardValidator = new FormValidator(settings, formAddCard);

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
  formProfileValidator.setSubmitButtonState()
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

function handleProfileFormSubmit (evt) {
  evt.preventDefault();
  profTitle.textContent = profileName.value;
  profSubtitle.textContent = profileJob.value;
  closePopup();
}

profileForm.addEventListener('submit', handleProfileFormSubmit);

function handleAddFormSubmit (evt) {
  evt.preventDefault();
  const pictureObj = {
    name: nameCard.value,
    link: linkInput.value
  };

  renderNewCard(pictureObj)
  closePopup();
  nameCard.value = "";
  linkInput.value = "";
}

formAddCard.addEventListener('submit', handleAddFormSubmit);

function openAddImage() {
  openPopup(addCardPopup);
  formCardValidator.setSubmitButtonState()
};

addImage.addEventListener('click', openAddImage);

function openImagePopup () {
  openPopup(pictureModal);
}

initialCards.forEach((item) => {
  const cardElement = {
    name: item.name,
    link: item.link,
  }
  renderNewCard(cardElement)
});
function renderNewCard(cardElement) {

  const card = new Card(cardElement, '#card').generateCard();
  elementSection.prepend(card)
};

formProfileValidator.enableValidation()
formCardValidator.enableValidation()
