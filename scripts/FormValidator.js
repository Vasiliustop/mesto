export class FormValidator {
  constructor(settings, form) {
    this.form = form;
    this.inputSelector = settings.inputSelector;
    this.inputErrorClass = settings.inputErrorClass;
    this.submitButtonSelector = settings.submitButtonSelector;
    this.submitButtonErrorClass = settings.submitButtonErrorClass;
    this.inputs = Array.from(this.form.querySelectorAll(this.inputSelector));
    this.button = form.querySelector(this.submitButtonSelector) ;
  }

  enableValidation() {
    this.setEventListeners(this.form);
  }

setEventListeners (form) {
  this.inputs.forEach(input => input.addEventListener('input', () => {
    this.handleField(form, input)
    this.setSubmitButtonState(form)
    }))
}

handleField (form, input) {
  if (input.validity.valid) {
    this.hideError(form, input);
  } else {
    this.showError(form, input)
  }
}

showError(form, input) {
  input.classList.add(this.inputErrorClass)
  const errorElement = form.querySelector(`#${input.id}-error`)
  errorElement.textContent = input.validationMessage
}

hideError(form, input) {
  input.classList.remove(this.inputErrorClass)
  const errorElement = form.querySelector(`#${input.id}-error`)
  errorElement.textContent = "" ;
}

setSubmitButtonState(form) {
  this.button.disabled = !form.checkValidity()
  this.button.classList.toggle(this.submitButtonErrorClass, !form.checkValidity())
}
}


