// Smart Calculator – Core JavaScript Practice

// FUNCTION 1: Add two numbers 
function add(a, b) {
  return a + b;
}

// FUNCTION 2: Subtract two numbers 
function subtract(a, b) {
  return a - b;
}

// FUNCTION 3: Multiply two numbers
function multiply(a, b) {
  return a * b;
}

// FUNCTION 4: Divide two numbers 

function divide(a, b) {
  if (b === 0) {
    return "Error: Cannot divide by zero";
  }
  return a / b;
}

// --- BONUS FUNCTION: Power (e.g. 2^3 = 8) 
function power(a, b) {
  return Math.pow(a, b);
}

//  FUNCTION 5: Calculate (the main function) 
function calculate(a, b, operator) {
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "*") {
    return multiply(a, b);
  } else if (operator === "/") {
    return divide(a, b);
  } else if (operator === "**") {
    return power(a, b);
  } else {
    return "Error: Invalid operator. Use +, -, *, /, or **";
  }
}


console.log(calculate(10, 5, "+"));   
console.log(calculate(8, 2, "*"));    
console.log(calculate(9, 0, "/"));    
console.log(calculate(2, 3, "**")); 

console.log(calculate(20, 4, "-"));  
console.log(calculate(10, 3, "/"));  
console.log(calculate(5, 5, "?"));    
