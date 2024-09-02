let displayValue = ''; // Store the current input

// Function to append values to the display
function appendValue(value) {
    // Prevent multiple operators or decimal points in a row
    if (
        (value === '+' || value === '-' || value === '*' || value === '/') &&
        (displayValue.slice(-1) === '+' || displayValue.slice(-1) === '-' ||
        displayValue.slice(-1) === '*' || displayValue.slice(-1) === '/')
    ) {
        return; // Ignore the input if it's an operator following another operator
    }

    // Prevent multiple decimal points in the same number
    if (value === '.' && displayValue.split(/[\+\-\*\/]/).pop().includes('.')) {
        return; // Ignore the input if there's already a decimal in the current number
    }

    displayValue += value; // Append the input to the current display value
    document.getElementById('display').textContent = displayValue; // Update the display
}

// Function to clear the display
function clearDisplay() {
    displayValue = ''; // Reset the display value
    document.getElementById('display').textContent = '0'; // Show '0' on the display
}

// Function to remove the last character from the display
function backspace() {
    displayValue = displayValue.slice(0, -1); // Remove the last character
    if (displayValue === '') {
        displayValue = '0'; // If the display is empty, show 0
    }
    document.getElementById('display').textContent = displayValue; // Update the display
}

// Function to calculate the result
function calculate() {
    try {
        // Evaluate the expression and round the result for precision
        displayValue = eval(displayValue).toString(); // Evaluate the expression and convert it to a string
        document.getElementById('display').textContent = displayValue; // Update the display with the result
    } catch (e) {
        document.getElementById('display').textContent = 'Error'; // Show 'Error' if there's an issue
        displayValue = ''; // Reset the display value
    }
}
