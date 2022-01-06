
const openPopup = document.querySelector('.profile__edit-button');
const overActiveClass = 'popup_active';
const overlay = document.querySelector('.popup');
const closeButton = document.querySelector('.popup__close-button');
const likeUse = document.querySelectorAll('.elements__element-button');

function openPop() {
  overlay.classList.add(overActiveClass);
  profileName.value = profTitle.textContent;
  profileJob.value = profSubtitle.textContent;
};

openPopup.addEventListener('click', openPop);

function closePop() {
  overlay.classList.remove(overActiveClass);
  }

closeButton.addEventListener('click', closePop);



document.addEventListener('keydown', function(evt) {
  if (evt.code === 'Escape') {
    overlay.classList.remove(overActiveClass); }
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
