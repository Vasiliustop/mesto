const openPopup = document.querySelector('.profile__edit-button');              // редактирование профиля
const overActiveClass = 'popup_active';
const overlay = document.querySelector('.popup');
const closeButton = document.querySelectorAll('.popup__close-button');           // кнопки закрытия попапов.
const addImage = document.querySelector('.profile__add-button');                 // кнопка добавления карточек
const popupTwo = document.querySelector('.popup_two');

function openPop() {
  profileName.value = profTitle.textContent;
  profileJob.value = profSubtitle.textContent;
  overlay.classList.add(overActiveClass);
};

openPopup.addEventListener('click', openPop);

function closePop() {
  overlay.classList.remove(overActiveClass);
  popupTwo.classList.remove(overActiveClass);
  pictureModal.classList.remove(overActiveClass);
};

document.addEventListener('keydown', function(evt) {
  if (evt.code === 'Escape') {
    overlay.classList.remove(overActiveClass);
    popupTwo.classList.remove(overActiveClass);
    pictureModal.classList.remove(overActiveClass);
   }
});

let profTitle = document.querySelector('.profile__title');
let profSubtitle = document.querySelector('.profile__subtitle');
let profileName = document.querySelector('.popup__input_type_name');
let profileJob = document.querySelector('.popup__input_type_job');
let formElement = document.querySelector('.popup__inputform');

function formSubmitHandler (evt) {
  evt.preventDefault();
  profTitle.textContent = profileName.value;
  profSubtitle.textContent = profileJob.value;
  overlay.classList.remove(overActiveClass);
}

formElement.addEventListener('submit', formSubmitHandler);

let formAddCard = document.querySelector('.popup__inputformcards');    // вторая форма
let nameCards = document.querySelector('.popup__input_type_namecards');    // имя новой карточки
let linkInput = document.querySelector('.popup__input_type_link');         // ссылка для новой карточки

function formAddHandler (evt) {
  evt.preventDefault();
  let pictureObj = {
    name: nameCards.value,
    link: linkInput.value
  };
  newCard(pictureObj);
  closePop();
}

formAddCard.addEventListener('submit', formAddHandler);

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

function newCard (item) {

  const cardElement = cardTemp.querySelector('.elements__card').cloneNode(true);   // клонируем содержимое template
  const deleteButton = cardElement.querySelector('.elements__delete-button');  // кнопка удаления
  const likeUse = cardElement.querySelector('.elements__element-button');     // кнопка лайка
  const cardImage = cardElement.querySelector('.elements__rectagle');
  const cardTitle = cardElement.querySelector('.elements__element-title');

  cardImage.src = item.link;
  cardTitle.textContent = item.name;

  cardImage.addEventListener('click', () => {bigPicture()});

  deleteButton.addEventListener('click', (evt) => {            // удаление карточки
    evt.target.closest('.elements__card').remove()
  })

  likeUse.addEventListener('click', (evt) => {                 // лайки
    evt.target.classList.toggle('elements__element-button_aktive')
  });

  function bigPicture() {
    pictureImg.src = item.link;
    pictureDescription.textContent = item.name;
    modalOpen();
  }

  elements.prepend(cardElement);
}

initialCards.forEach(newCard);

function openAddImage() {
  popupTwo.classList.add(overActiveClass);
};

addImage.addEventListener('click', openAddImage);

closeButton.forEach(close => {
  close.addEventListener('click', closePop)
});

function modalOpen () {
  pictureModal.classList.add(overActiveClass);
}






12



