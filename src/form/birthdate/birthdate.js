const birthDateValidationMessage = document.querySelector('.birthdate-validation')

export function validateBirthDay() {
  const birthDayInput = document.querySelector('.birthday-input')

  birthDayInput.addEventListener('blur', () => {
    if (!birthDayInput.value) {
      birthDayInput.style.border = '3px solid var(--red)'
      birthDateValidationMessage.innerHTML = '⚠️ saisie invalide'
      return false
    }

    if (birthDayInput.value > 0 && birthDayInput.value <= 31) {
      birthDayInput.style.border = '3px solid var(--green)'
      birthDateValidationMessage.innerHTML = '&nbsp'
    } else {
      birthDayInput.style.border = '3px solid var(--red)'
      birthDateValidationMessage.innerHTML = '⚠️ Veuillez saisir un nombre entre 0 et 31...'
    }
  })
}

export function validateBirthMonth() {
  const birthMonthInput = document.querySelector('.birthmonth-input')

  birthMonthInput.addEventListener('blur', () => {
    if (!birthMonthInput.value) {
      birthMonthInput.style.border = '3px solid var(--red)'
      birthDateValidationMessage.innerHTML = '⚠️ saisie invalide'
      return false
    }

    if (birthMonthInput.value > 0 && birthMonthInput.value <= 12) {
      birthMonthInput.style.border = '3px solid var(--green)'
      birthDateValidationMessage.innerHTML = '&nbsp'
    } else {
      birthMonthInput.style.border = '3px solid var(--red)'
      birthDateValidationMessage.innerHTML = '⚠️ Veuillez saisir un nombre entre 0 et 12...'
    }
  })
}

export function validateBirthYear() {
  const birthYearInput = document.querySelector('.birthyear-input')

  birthYearInput.addEventListener('blur', () => {
    const valid4DigitsYear = /^\d{4}$/

    if (!birthYearInput.value || !valid4DigitsYear.test(birthYearInput.value)) {
      birthYearInput.style.border = '3px solid var(--red)'
      birthDateValidationMessage.innerHTML = '⚠️ saisie invalide'
      return false
    }

    if (birthYearInput.value > 1900 && birthYearInput.value <= new Date().getFullYear()) {
      birthYearInput.style.border = '3px solid var(--green)'
      birthDateValidationMessage.innerHTML = '&nbsp'
    } else {
      birthYearInput.style.border = '3px solid var(--red)'
      birthDateValidationMessage.innerHTML = '⚠️ L"année semble incorrecte'
    }
  })
}
