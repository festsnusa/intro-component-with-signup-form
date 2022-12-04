let inputs = document.querySelectorAll('.input__box'),
  submitButton = document.querySelector('.button_submit'),
  messages = document.querySelectorAll('.input__subtitle')

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

submitButton.addEventListener('click', () => {

  inputs.forEach((input, i) => {

    if (!validationPassed(input.value, i)) {
      input.classList.add('input__box_error')
      messages[i].classList.add('input__subtitle_active')
    } else {
      input.classList.remove('input__box_error')
      messages[i].classList.remove('input__subtitle_active')
    }
    
  })

})

function validationPassed(value, i) {

  if (i == 2) {

    if (validateEmail(value) == null)
      return false

  } else {
    if (value.length == 0)
      return false
  }

  return true

}