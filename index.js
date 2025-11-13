// code here, goodluck!!
"use strict";

// Initiate prompt-sync
const prompt = require("prompt-sync")({ sigint: true });

// How many decimal places to keep for display
const decimalsMax = 12;
const EPS = 10 ** -decimalsMax;

// -------- Float-safe utils (display + comparisons) --------
function roundTo(n, decimals = decimalsMax) {
  const factor = 10 ** decimals;
  // Number.EPSILON nudges the value so .5 rounds up reliably
  return Math.round((n + Number.EPSILON) * factor) / factor;
}

function isAlmostZero(n, eps = EPS) {
  return Math.abs(n) < eps;
}

function isAlmostInteger(n, eps = EPS) {
  return Math.abs(n - Math.round(n)) < eps;
}

// Format for printing: rounded and no trailing zeros
function formatNumber(n, decimals = decimalsMax) {
  const r = roundTo(n, decimals);
  const rResult = r.toFixed(decimals);
  return parseFloat(rResult);
}

// 1. User Input Handling
function getValidNumberInput(promptMessage = "Please enter a number.") {
  while (true) {
    const input = prompt(promptMessage);

    if (input === null) {
      console.log("Input cancelled. Exiting...");
      process.exit(0);
    }

    if (input.trim() === "") {
      console.log("Invalid data! Please enter a number.");
      continue;
    }

    const num = Number(input);
    if (!isNaN(num)) {
      return num;
    }

    console.log("Invalid data! Please enter a valid number.");
  }
}

function getValidOperatorInput(promptMessage = "Please enter an operator.") {
  const allowedOperators = new Set(["+", "-", "*", "/", "%", "**"]);

  while (true) {
    const input = prompt(promptMessage);

    if (input === null) {
      console.log("Input cancelled. Exiting...");
      process.exit(0);
    }

    const operator = input.trim();
    if (input.trim() === "") {
      console.log("Invalid data! Please enter an operator.");
      continue;
    }

    if (allowedOperators.has(operator)) {
      return operator;
    }

    console.log("Invalid data! Please enter a valid operator.");
  }
}

// 2. Basic Arithmetic Operation (Functions and Operators)
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function modulo(a, b) {
  return a % b;
}

function power(a, b) {
  return a ** b;
}

// 3. Main Calculator Logic (Switch & If/Else)
while (true) {
  const value1 = getValidNumberInput("Enter first number:");
  console.log("Validated number", value1);

  const operatorValue = getValidOperatorInput(
    "Enter operator (+, -, *, /, %, **):"
  );
  console.log("Validated operator", operatorValue);

  const value2 = getValidNumberInput("Enter second number:");
  console.log("Validated number", value2);

  let result;

  switch (operatorValue) {
    case "+":
      result = add(value1, value2);
      break;
    case "-":
      result = subtract(value1, value2);
      break;
    case "*":
      result = multiply(value1, value2);
      break;
    case "/":
      if (value2 === 0) {
        console.log("Error: Division by zero!");
        continue;
      }
      result = divide(value1, value2);
      break;
    case "%":
      if (value2 === 0) {
        console.log("Error: Modulo by zero!");
        continue;
      }
      result = modulo(value1, value2);
      break;
    case "**":
      result = power(value1, value2);
      break;
    default:
      console.log("Invalid operator!");
      continue;
  }

  // 4. Data Type Analysis & Conditional Output
  // Use rounded values for classification and formatted string for display
  const rounded = roundTo(result, decimalsMax);
  const formatted = formatNumber(rounded, decimalsMax);

  console.log(`Result: ${formatted}, ${typeof result}`);

  if (isAlmostZero(rounded)) {
    console.log("Zero");
  } else if (rounded > 0) {
    console.log("Positive");
  } else {
    console.log("Negative");
  }

  // Even/odd only makes sense for integers
  if (isAlmostInteger(rounded)) {
    const asInt = Math.round(rounded);
    const evenOdd = asInt % 2 === 0 ? "even" : "odd";
    if (asInt > 0) {
      console.log(`Positive and ${evenOdd}`);
    } else if (asInt < 0) {
      console.log(`Negative and ${evenOdd}`);
    } else {
      console.log(`Zero and ${evenOdd}`); // 0 is even
    }
  }

  console.log(isAlmostInteger(rounded) ? "Integer" : "Float");

  if (result === undefined || result === null) {
    console.log(result ?? "Result is undefined or null, something went wrong!");
  }

  // 5. Exit Mechanism (Loops & Conditionals)
  const calculateAgain = prompt(
    'Do you want to do another calculation? ("yes" or any key to continue, "no" to exit.)'
  );
  if (calculateAgain.toLowerCase() === "no") {
    console.log("Goodbye! Thank you for using Calculator!");
    break;
  } else if (calculateAgain.toLowerCase() === "yes") {
    continue;
  }
}
