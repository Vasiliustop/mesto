export const initialCards = [

  {
    name: 'Кот',
    link: 'https://i.ibb.co/grHGVXp/image.jpg'
  },
  {
    name: 'Лампочка',
    link: 'https://i.ibb.co/F8NmVxC/image.jpg'
  },
  {
    name: 'Новый год',
    link: 'https://i.ibb.co/Db1knmX/newyear.jpg'
  },
  {
    name: 'Форд-мустанг',
    link: 'https://i.ibb.co/NCtTbCb/fordmustang.jpg'
  },
  {
    name: 'Лайм',
    link: 'https://i.ibb.co/nPCxhp1/image.jpg'
  },
  {
    name: 'Облака',
    link: 'https://i.ibb.co/Fs89ktV/nebo.jpg'
  }
];

export const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  inputErrorClass: 'popup__error',
  submitButtonSelector: '.popup__save-button',
  submitButtonErrorClass: 'popup__button-invalid',
}

export const profileOpenButton = document.querySelector('.profile__edit-button');         // кнопка редактирование профиля
export const addImageButton = document.querySelector('.profile__add-button');             // кнопка добавления карточек
export const profTitle = document.querySelector('.profile__title');                  // информация в профайле
export const profSubtitle = document.querySelector('.profile__subtitle');            // информация в профайле
export const profileName = document.querySelector('.popup__input_type_name');
export const profileJob = document.querySelector('.popup__input_type_job');
export const profileForm = document.querySelector('.popup__inputform');
export const formAddCard = document.querySelector('.popup__inputformcards');    // вторая форма
export const deleteCardButtton = document.querySelector('.elements__delete-button');
export const deleteCardPopup = document.querySelector('.popup_type-delete');
export const editAvatarButton = document.querySelector('.profile__edit-avatar');
export const addAvatarForm = document.querySelector('.add-avatar-form');
export const fotoAvatarImage = document.querySelector('.profile__image')




