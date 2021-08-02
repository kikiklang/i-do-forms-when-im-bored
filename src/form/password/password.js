import eye from '../../../assets/icons/eye.svg'
import eyeOff from '../../../assets/icons/eye-off.svg'

const passwordInput = document.querySelector('.password-input')

export function validatePassword() {
  const passwordValidationMessage = document.querySelector('.password-validation')

  passwordInput.addEventListener('blur', () => {
    if (!passwordInput.value) {
      passwordInput.style.border = '3px solid var(--red)'
      passwordValidationMessage.innerHTML = '⚠️ Le mot de passe est manquant'
      return false
    }

    if (passwordInput.value.length > 0 && passwordInput.value.length < 6) {
      passwordInput.style.border = '3px solid var(--red)'
      passwordValidationMessage.innerHTML = '⚠️ Le mot de passe est trop court'
      return false
    }

    if (passwordInput.value.length > 6) {
      passwordInput.style.border = '3px solid var(--green)'
      passwordValidationMessage.innerHTML = '&nbsp'

      return passwordInput.value
    }
  })
}

export function togglePasswordView() {
  const displayPasswordButton = document.querySelector('.password-display-icon')
  const passwordIcon = document.querySelector('.password-icon')

  displayPasswordButton.addEventListener('click', event => {
    event.preventDefault()

    if (passwordInput.type === 'password') {
      passwordInput.type = 'text'
      passwordIcon.src = eyeOff
    } else {
      passwordInput.type = 'password'
      passwordIcon.src = eye
    }
  })
}
