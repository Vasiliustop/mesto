export class FormValidator {
  constructor(settings, form) {
    this._form = form;
    this._inputSelector = settings.inputSelector;
    this._inputErrorClass = settings.inputErrorClass;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._submitButtonErrorClass = settings.submitButtonErrorClass;
    this._inputs = this._form.querySelectorAll(this._inputSelector);
    this._button = form.querySelector(this._submitButtonSelector);
  }

  enableValidation() {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }

  _setEventListeners() {
    this._inputs.forEach(input => input.addEventListener('input', () => {
      this._handleField(input)
      this.setSubmitButtonState()
    }))
  }

  _handleField(input) {
    if (input.validity.valid) {
      this._hideError(input);
    } else {
      this._showError(input)
    }
  }

  _showError(input) {
    input.classList.add(this._inputErrorClass)
    const errorElement = this._form.querySelector(`#${input.id}-error`)
    errorElement.textContent = input.validationMessage
  }

  _hideError(input) {
    input.classList.remove(this._inputErrorClass)
    const errorElement = this._form.querySelector(`#${input.id}-error`)
    errorElement.textContent = "";
  }

  setSubmitButtonState() {
    this._button.disabled = !this._form.checkValidity()
    this._button.classList.toggle(this._submitButtonErrorClass, !this._form.checkValidity())
  }
}


