const result = document.getElementById('result');
const buttons = document.querySelectorAll('.calculator button');

let currentNumber = '';
let firstNumber = null;
let operator = null;

function appendNumber(number) {
  if (number === '.' && currentNumber.includes('.')) {
    return;
  }
  currentNumber += number;
  result.value = currentNumber;
}

function setOperator(op) {
  if (firstNumber === null) {
    firstNumber = parseFloat(currentNumber);
    operator = op;
    currentNumber = '';
  } else if (currentNumber !== '') {
    performCalculation();
    operator = op;
  }
}

function performCalculation() {
  const secondNumber = parseFloat(currentNumber);
  switch (operator) {
    case '+':
      firstNumber += secondNumber;
      break;
    case '-':
      firstNumber -= secondNumber;
      break;
    case '*':
      firstNumber *= secondNumber;
      break;
    case '/':
      firstNumber /= secondNumber;
      break;
    default:
      return;
  }
  currentNumber = '';
  result.value = firstNumber;
}

function clearCalculator() {
  currentNumber = '';
  firstNumber = null;
  operator = null;
  result.value = '';
}

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const buttonText = event.target.innerText;

    if (buttonText >= '0' && buttonText <= '9') {
      appendNumber(buttonText);
    } else if (buttonText === '.') {
      appendNumber(buttonText);
    } else if (buttonText === 'AC') {
      clearCalculator();
    } else if (buttonText === '+') {
      setOperator(buttonText);
    } else if (buttonText === '-') {
      setOperator(buttonText);
    } else if (buttonText === '*') {
      setOperator(buttonText);
    } else if (buttonText === '/') {
      setOperator(buttonText);
    } else if (buttonText === '=') {
      if (operator !== null && currentNumber !== '') {
        performCalculation();
        operator = null;
      }
    }
  });
});
