import {validateFirstName, validateLastName} from './names/names.js'
import {validateBirthDay, validateBirthMonth, validateBirthYear} from './birthdate/birthdate.js'
import {validateEmail} from './email/email.js'
import {validatePassword, togglePasswordView} from './password/password.js'

function formController() {
  validateFirstName()
  validateLastName()
  validateBirthDay()
  validateBirthMonth()
  validateBirthYear()
  validateEmail()
  validatePassword()
  togglePasswordView()
}

export {formController}
