
const openPopup = document.querySelector('.profile__edit-button');
const overActiveClass = 'popup_active';
const overlay = document.querySelector('.popup');
const closeButton = document.querySelector('.popup__close-button');
const likeUse = document.querySelectorAll('.elements__element-button');
const aktiveLike = 'elements__element-button_aktive';


for(let i = 0; i < likeUse.length; i ++) {
  likeUse[i].addEventListener('click', function() {
  likeUse[i].classList.toggle(aktiveLike);
 });
}


openPopup.addEventListener('click', function()
{overlay.classList.add(overActiveClass);

  profileName.value = profTitle.textContent;
  profileJob.value = profSubtitle.textContent;
});


closeButton.addEventListener('click', function() {
overlay.classList.remove(overActiveClass);

});

document.addEventListener('keydown', function(evt)
  { if (evt.code === 'Escape') {
    overlay.classList.remove(overActiveClass); }
    
});


let profTitle = document.querySelector('.profile__title');
let profSubtitle = document.querySelector('.profile__subtitle');
let profileName = document.querySelector('.popup__name');
let profileJob = document.querySelector('.popup__job');
let formElement = document.querySelector('.popup__inputform');


function formSubmitHandler (evt) {
  evt.preventDefault();
  profTitle.textContent = profileName.value;
  profSubtitle.textContent = profileJob.value;
  overlay.classList.remove(overActiveClass);

}

formElement.addEventListener('submit', formSubmitHandler);
