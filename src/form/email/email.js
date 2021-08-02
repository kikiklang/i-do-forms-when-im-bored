export function validateEmail() {
  const emailInput = document.querySelector('.email-input')
  const emailValidationMessage = document.querySelector('.email-validation')

  emailInput.addEventListener('blur', () => {
    const validEmail = /^[-!#$%&'*+/\w=?^`{|}~](\.?[-!#$%&'*+/\w=?^`{|}~])*@[a-zA-Z\d](-*\.?[a-zA-Z\d])*\.[a-zA-Z](-?[a-zA-Z\d])+$/

    if (!emailInput.value) {
      emailInput.style.border = '3px solid var(--red)'
      emailValidationMessage.innerHTML = '⚠️ L\'email est manquant'
      return false
    }

    const emailParts = emailInput.value.split('@')
    if (emailParts.length !== 2) {
      emailInput.style.border = '3px solid var(--red)'
      emailValidationMessage.innerHTML = '⚠️ La saisie est invalide'
      return false
    }

    const [account, address] = emailParts
    if (account.length > 64) {
      emailInput.style.border = '3px solid var(--red)'
      emailValidationMessage.innerHTML = '⚠️ La saisie est invalide'
      return false
    }

    if (address.length > 255) {
      emailInput.style.border = '3px solid var(--red)'
      emailValidationMessage.innerHTML = '⚠️ La saisie est invalide'
      return false
    }

    const domainParts = address.split('.')
    if (domainParts.some(part => part.length > 63)) {
      emailInput.style.border = '3px solid var(--red)'
      emailValidationMessage.innerHTML = '⚠️ La saisie est invalide'
      return false
    }

    if (validEmail.test(emailInput.value)) {
      emailInput.style.border = '3px solid var(--green)'
      emailValidationMessage.innerHTML = '&nbsp'
    } else {
      emailInput.style.border = '3px solid var(--red)'
      emailValidationMessage.innerHTML = '⚠️ La saisie est invalide'
    }
  })
}
