export function validateFirstName() {
  const firstNameInput = document.querySelector('.firstname-input')
  const firstNameValidationMessage = document.querySelector('.firstname-validation')

  firstNameInput.addEventListener('blur', () => {
    const nameRegex = /^[a-zA-Z]+(?:-[a-zA-Z]+)*$/

    if (!firstNameInput.value) {
      firstNameInput.style.border = '3px solid var(--red)'
      firstNameValidationMessage.innerHTML = '⚠️ Veuillez saisir un prénom'
      return false
    }

    if (nameRegex.test(firstNameInput.value)) {
      firstNameInput.style.border = '3px solid var(--green)'
      firstNameValidationMessage.innerHTML = '&nbsp'
      return true
    }

    firstNameInput.style.border = '3px solid var(--red)'
    firstNameValidationMessage.innerHTML = '⚠️ La saisie semble invalide'
    return false
  })
}

export function validateLastName() {
  const lastNameInput = document.querySelector('.lastname-input')
  const lastNameValidationMessage = document.querySelector('.lastname-validation')

  lastNameInput.addEventListener('blur', () => {
    const nameRegex = /^[a-zA-Z]+(?:-[a-zA-Z]+)*$/

    if (!lastNameInput.value) {
      lastNameInput.style.border = '3px solid var(--red)'
      lastNameValidationMessage.innerHTML = '⚠️ Veuillez saisir un nom'
      return false
    }

    if (nameRegex.test(lastNameInput.value)) {
      lastNameInput.style.border = '3px solid var(--green)'
      lastNameValidationMessage.innerHTML = '&nbsp'
      return true
    }

    lastNameInput.style.border = '3px solid var(--red)'
    lastNameValidationMessage.innerHTML = '⚠️ La saisie semble invalide'
    return false
  })
}
