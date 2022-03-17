import './../pages/index.css'
import { Card } from '../components/Card.js'
import { Section } from '../components/Section.js'
import { FormValidator } from '../components/FormValidator.js'
import  PopupWithImage  from '../components/PopupWithImage.js'
import  UserInfo from '../components/UserInfo.js'
import  PopupWithForm  from '../components/PopupWithForm.js'

import { initialCards, settings, profileOpenButton, addImageButton, profTitle, profSubtitle, profileName, profileJob, profileForm, formAddCard, cardImage , cardTitle } from "../utils/constants.js";

const formProfileValidator = new FormValidator(settings, profileForm);
const formCardValidator = new FormValidator(settings, formAddCard);

profileOpenButton.onclick = function () {
  const userDescription = userInfo.getUserInfo();
  profileName.value = userDescription.name;
  profileJob.value = userDescription.job
  popupProfile.open();
}

addImageButton.onclick = function () {
  popupAddCard.open();
  formCardValidator.setSubmitButtonState()
}

const imagePopup = new PopupWithImage('.popup_type_picture');

function handleCardClick(name, link) {
  imagePopup.open(name, link)
}

function renderNewCard(data) {
  const card = new Card(data, '#card', handleCardClick).generateCard();
  return card
};

const cardSection = new Section({
  items: initialCards,
  renderer: (item) => {
     cardSection.addItem(renderNewCard(item))
  },
},
 '.elements')

 cardSection.renderItems()
 const userInfo = new UserInfo({ profileName: profTitle, profileJob: profSubtitle });

 const popupProfile = new PopupWithForm('.popup_profile',
  (data) => {
     userInfo.setUserInfo(data);
     popupProfile.close();
  }
)

const popupAddCard = new PopupWithForm(
  '.popup_type_place',
  (data) => {
     const item = {
        name: data.namecard,
        link: data.linkcard
     }
     cardSection.addItem(renderNewCard(item))
     popupAddCard.close()
  }
)

popupProfile.setEventListeners()
popupAddCard.setEventListeners()
imagePopup.setEventListeners()
formProfileValidator.enableValidation()
formCardValidator.enableValidation()

