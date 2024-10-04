let num1
let num2
let operator = [
  function addition(num1, num2) {
    return num1 + +num2
  },

  function subtraction(num1, num2) {
    return num1 - +num2
  },

  function multiplication(num1, num2) {
    return num1 * +num2
  },

  function division(num1, num2) {
    return num1 / +num2
  },
]
let currentOperator
let display = document.querySelector('.display')
let displayValue
let button = document.querySelectorAll('td')
let result

function operate(num1, num2) {
  let result = operator[currentOperator](num1, num2)
  displayValue = result
  addToDisplay(displayValue)
  num1 = result
  return result
}
document.addEventListener('click', (e) => {
  if (
    e.target.matches('.digit') ||
    e.target.matches('.operator') ||
    e.target.matches('#equals')
  ) {
    if (
      currentOperator &&
      !e.target.matches('#equals') &&
      e.target.matches('.digit')
    ) {
      num2 ? (num2 += e.target.textContent) : (num2 = e.target.textContent)
    }
    if (e.target.matches('.operator') && currentOperator && num2) {
      num1 = operate(num1, num2)
      currentOperator = e.target.id
      num2 = ''
      console.log(`num1 is ${num1}`)
    } else if (e.target.matches('.operator')) {
      num1 = +displayValue
      currentOperator = e.target.id
    }
    if (!currentOperator && num1) clearCalculator()
    if (e.target.matches('#equals')) {
      operate(num1, num2)
      num2 = ''
      currentOperator = ''
    } else {
      displayValue
        ? (displayValue += e.target.textContent)
        : (displayValue = e.target.textContent)
    }
    addToDisplay(displayValue)
  }
  if (e.target.matches('#clear')) {
    clearCalculator()
  }
})

function addToDisplay(displayValue) {
  display.textContent = displayValue
}

function clearCalculator() {
  displayValue = ''
  num1 = ''
  num2 = ''
  currentOperator = ''
  addToDisplay(displayValue)
}
