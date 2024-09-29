// Select the display element and the equal button
const display = document.getElementById("display");
const equalButton = document.getElementById('equal');
const clearButton = document.getElementById('clear');

// Select all the buttons
let buttons = document.querySelectorAll('button');

// Add event listeners to each button except for the equal button and clear button
buttons.forEach(button => {
  button.addEventListener('click', function() {
    // Ignore the equal and clear button clicks in this loop
    if (button.id === 'equal' || button.id === 'clear') {
      return;
    }

    // Append the button's text to the display, handling the multiplication symbol
    if (button.innerText === 'x') {
      display.innerText += '*'; // Replace 'x' with '*' for multiplication
    } else {
      // If display is '0', replace it with the new input
      if (display.innerText === '0') {
        display.innerText = button.innerText;
      } else {
        display.innerText += button.innerText; 
      }
    }
  });
});

// Add event listener for the equal button
equalButton.addEventListener('click', function() {
  try {
    // Evaluate the expression in the display and update the display with the result
    let result = eval(display.innerText); // Use eval to calculate the result
    display.innerText = result; // Display the result
  } catch (error) {
    // Handle any errors, such as syntax errors in the expression
    display.innerText = "Error"; 
  }
});

// Add event listener for the clear button
clearButton.addEventListener('click', function() {
  display.innerText = '0'; // Reset the display
});
