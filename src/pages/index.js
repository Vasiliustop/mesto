import './../pages/index.css'
import { Card } from '../components/Card.js'
import { Section } from '../components/Section.js'
import { FormValidator } from '../components/FormValidator.js'
import PopupWithImage from '../components/PopupWithImage.js'
import UserInfo from '../components/UserInfo.js'
import PopupWithForm from '../components/PopupWithForm.js'
import Api from '../components/Api.js'
import { settings, profileOpenButton, addImageButton, profTitle, profSubtitle, profileName, profileJob, profileForm, formAddCard, editAvatarButton, addAvatarForm, fotoAvatarImage, } from "../utils/constants.js";
import PopupWithDelete from '../components/PopupWithDelete.js'
const formProfileValidator = new FormValidator(settings, profileForm);
const formCardValidator = new FormValidator(settings, formAddCard);
const formAvatarValidator = new FormValidator(settings, addAvatarForm)
let userId

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-38',
  headers: {
    authorization: 'd93cb8f9-43a8-4eb0-a818-f7d7f8da3b12',
    'Content-Type': 'application/json'
  }
});
editAvatarButton.addEventListener('click', () => {
  addAvatarPopup.open();
  formAvatarValidator.setSubmitButtonState()
})

profileOpenButton.addEventListener('click', () => {
  const userDescription = userInfo.getUserInfo();
  profileName.value = userDescription.name;
  profileJob.value = userDescription.job
  popupProfile.open();
})

addImageButton.addEventListener('click', () => {
  popupAddCard.open();
  formCardValidator.setSubmitButtonState()
})

const userInfo = new UserInfo({
  profileName: profTitle,
  profileJob: profSubtitle,
  profileAvatar: fotoAvatarImage
});

const cardSection = new Section({
  renderer: (item) => {
    cardSection.addItem(renderNewCard(item))
  },
},
  '.elements')

function renderNewCard(data) {
  const card = new Card(
    data,
    '#card',
    userId,
    handleCardClick,
    clickedLike,
    usePopupConfirmOfDelete,
  )

  function clickedLike(id) {
    if (card.getLike()) {
      api.unlike(id)
        .then(res => {
          card.setLikes(res.likes)
        })
        .catch((err) => {
          console.log('err', err);
        })
    } else {
      api.addLike(id)
        .then(res => {
          card.setLikes(res.likes)
        })
        .catch((err) => {
          console.log('err', err);
        })
    }
}
  function usePopupConfirmOfDelete() {
    popupConfirmOfDelete.open();
    popupConfirmOfDelete.changeSubmitHandler(() => {
      api.deleteCard(data._id)
        .then(() => {
          card.handleRemoveButtonClick();
          popupConfirmOfDelete.close();
        })
        .catch((err) => {
          console.log('err', err);
        })
    })}

 const cardElement = card.generateCard()
 return cardElement;
};

function handleCardClick(name, link) {
  imagePopup.open(name, link)
}

Promise.all([api.getProfile(), api.getInitialCards()])
  .then(([user, cards]) => {
    userInfo.setUserInfo(user.name, user.about)
    userInfo.setAvatarInfo(user.avatar)
    userId = user._id
    cardSection.renderItems(cards);
  })
  .catch((err) => {
    console.log('err', err);
  })

const popupProfile = new PopupWithForm('.popup_profile',
  (data) => {
    popupProfile.renderLoading(true)
    api.editProfile(data.name, data.job)
      .then(() => {
        userInfo.setUserInfo(data.name, data.job);
        popupProfile.close();
      })
      .catch((err) => {
        console.log('err', err);
      })
      .finally(() => popupProfile.renderLoading(false))
  }
)

const popupAddCard = new PopupWithForm(
  '.popup_type_place',
  (data) => {
    popupAddCard.renderLoading(true)
    api.addCard(data.namecard, data.linkcard)
      .then(res => {
        cardSection.addItem(renderNewCard(res))
        popupAddCard.close()
      })
      .catch((err) => {
        console.log('err', err);
      })
      .finally(() => popupAddCard.renderLoading(false))
  })

const addAvatarPopup = new PopupWithForm('.popup_type-avatar',
  (avatar) => {
    addAvatarPopup.renderLoading(true);
    api.changeAvatar(avatar)
      .then(res => {
        console.log(res)
        console.log(avatar)
        console.log(res.avatar)
        userInfo.setAvatarInfo(res.avatar);
        addAvatarPopup.close();
      })
      .catch((err) => {
        console.log('err', err);
      })
      .finally(() => addAvatarPopup.renderLoading(false))
  })

const imagePopup = new PopupWithImage('.popup_type_picture');

const popupConfirmOfDelete = new PopupWithDelete('.popup_type-delete');

popupConfirmOfDelete.setEventListeners()
popupProfile.setEventListeners()
popupAddCard.setEventListeners()
imagePopup.setEventListeners()
addAvatarPopup.setEventListeners()
formProfileValidator.enableValidation()
formCardValidator.enableValidation()
formAvatarValidator.enableValidation()
