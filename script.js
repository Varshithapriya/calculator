// Get the display element
const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentInput = '';
let resultDisplayed = false;

// Loop through all buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value') || button.innerText;

    // Clear screen
    if (button.id === 'ac') {
      currentInput = '';
      display.value = '';
      resultDisplayed = false;
    }
    // Evaluate expression
    else if (value === '=') {
      try {
        let result = eval(currentInput);
        display.value = result;
        currentInput = result.toString();
        resultDisplayed = true;
      } catch {
        display.value = 'Error';
        currentInput = '';
      }
    }
    // Square operation
    else if (value === '**2') {
      try {
        let num = eval(currentInput);
        let square = num * num;
        display.value = square;
        currentInput = square.toString();
        resultDisplayed = true;
      } catch {
        display.value = 'Error';
        currentInput = '';
      }
    }
    // For any other button
    else {
      if (resultDisplayed && !isNaN(value)) {
        currentInput = ''; // Clear previous result for new number
        resultDisplayed = false;
      }
      currentInput += value;
      display.value = currentInput;
    }
  });
});