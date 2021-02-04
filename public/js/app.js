// Selectors

const previousNumber = document.querySelector('[first-number]')
const currentNumber = document.querySelector('[second-number]')
const numberButtons = document.querySelectorAll('[number]')
const operatorButtons = document.querySelectorAll('[operator]')
const clearButton = document.querySelector('[allclear]')
const deleteButton = document.querySelector('[delete]')
const equalsButton = document.querySelector('[equals]')

// Click events

 numberButtons.forEach(button => button.addEventListener('click', () => {
      if (button.innerText === '.' && currentNumber.innerText.includes('.')) return
      currentNumber.innerText = currentNumber.innerText + button.innerText
}))

operatorButtons.forEach(operatorButton => operatorButton.addEventListener('click', () => {
  if (currentNumber.innerText === '') return
  if (previousNumber.innerText !== '') {
    calculate()
  }
    operationType = operatorButton.innerText
    currentNumber.innerText = currentNumber.innerText + operationType
    previousNumber.innerText = currentNumber.innerText
    currentNumber.innerText = ''
}))


clearButton.addEventListener('click', () => {
      currentNumber.innerText = ''
      previousNumber.innerText = ''
})

deleteButton.addEventListener('click', button => {
    currentNumber.innerText = currentNumber.innerText.slice(0, -1)
})

equalsButton.addEventListener('click', () => {
  calculate()
})


const calculate = () => {

  let compute

  const current = parseFloat(currentNumber.innerText)
  const previous = parseFloat(previousNumber.innerText)
  
  if (isNaN(previous) || isNaN(current)) return

  operationType === '÷' ? compute = previous / current : 
  operationType === '*' ? compute = previous * current : 
  operationType === '+' ? compute = previous + current : 
  operationType === '-' ? compute = previous - current :
  alert('Wrong input!')

  currentNumber.innerText = compute
  previousNumber.innerText = ''
}
