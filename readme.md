[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/Lhf0w45z)
# Challenge 3 - The Interactive Calculator & Data Analyzer

# Description

In this challenge, you'll build a command-line application using JavaScript that acts as a simple calculator and a basic data analyzer. This challenge is designed to reinforce your understanding of core JavaScript concepts, including variables (var, let, const), data types, explicit and implicit type conversions, basic math operators, conditional statements (if/else, ternary, logical operators), loops (while, for), switch statements, and functions (function declarations, expressions, and arrow functions).

You will be given a basic project structure, and your task will be to implement the logic to handle user input, perform calculations, and analyze the resulting data.

# Folder Structure

You are provided with the following folder structure:

```
root/
  ├── index.js
  └── readme.md
  └── package.json
  └── package-lock.json
  └── .gitignore
```

You will only need to modify the index.js file for this assignment.

# Assignment Objectives

## 1. User Input Handling

- Create a function `getValidNumberInput(promptMessage)` that takes a string as a prompt.
  - Inside this function, use `prompt()` (or simulate input if running in Node.js without prompt-sync, or instruct on using the browser's native `prompt()` if in HTML) to ask the user for a number.
  - Implement a `while` loop to repeatedly ask for input until a valid number is entered.
    - Use `Number()` for explicit conversion and check `isNaN()` to validate.
  - Return the validated number.
- Similarly, create a function `getValidOperatorInput(promptMessage)` that asks for an operator (`+`, `-`, `*`, `/`, `%`, `**`).
  - Use a `while` loop to ensure the input is one of these valid operators.

---

## 2. Basic Arithmetic Operation (Functions and Operators)

- Create separate function declarations for each basic arithmetic operation:
  - `add(a, b)`: Returns `a + b`
  - `subtract(a, b)`: Returns `a - b`
  - `multiply(a, b)`: Returns `a * b`
  - `divide(a, b)`: Returns `a / b`
    - Handle division by zero: if `b` is 0, return a specific string like `"Error: Division by zero!"`.
  - `modulo(a, b)`: Returns `a % b`
  - `power(a, b)`: Returns `a ** b`

---

## 3. Main Calculator Logic (Switch & If/Else)

- In your `index.js` file, use a `while(true)` loop to allow the calculator to run continuously until the user decides to exit.
- Inside the loop:
  - Get two numbers using `getValidNumberInput()`.
  - Get an operator using `getValidOperatorInput()`.
  - Use a `switch` statement to call the appropriate arithmetic function based on the operator.
  - Store the result of the operation.

---

## 4. Data Type Analysis & Conditional Output

_(Data Types, Type Conversions, If/Else, Ternary, Logical Operators, Nullish Coalescing)_

- After each calculation, display the result.
- Implement logic to analyze the result and print messages based on its type and value.
- Use `typeof` to determine the data type of the result.

**If the result is a number:**

- Use an `if/else if/else` chain to check if the number is:
  - Positive, Negative, or Zero.
  - An integer or a floating-point number (hint: use `Number.isInteger()`).
- Use a **ternary operator** to print if the number is `"Even"` or `"Odd"`.

**If the result is a string** (e.g., `"Error: Division by zero!"`):

- Print the error message clearly.

**If the result is `undefined` or `null`** (which shouldn't happen with valid inputs but good to check):

- Use the `??` (Nullish Coalescing Operator) to provide a default message like  
  `"Result is undefined or null, something went wrong!"`.

- Use operators `&&` (AND) and `||` (OR) in your conditional checks where appropriate for more complex conditions (e.g., `"Positive and even"`).

---

## 5. Exit Mechanism (Loops & Conditionals)

- After each calculation and analysis, ask the user if they want to perform another calculation.
- Use a simple input (`prompt()`) and an `if` statement with `break` to exit the main `while(true)` loop if the user types `'no'` (case-insensitive).

---

## 6. Code Readability & `'use strict'`

- Start your `index.js` file with `'use strict';` to enable strict mode.
- Ensure your code is well-formatted, uses meaningful variable and function names, and includes comments where necessary.

# Getting Started

Don't forget to install packages u need (prompt-sync) for prompting

```
npm install

```

Use this command on terminal to run your app

```
node index.js

```

# Important Notes

- 'use strict';: Remember to place this at the very top of your index.js file.

- Input Validation: Focus on robust input validation for numbers and operators.

- Error Handling: Specifically handle division by zero.

- Clarity: Ensure your output messages are clear and informative to the user.

- No HTML/CSS: This is a pure JavaScript command-line challenge.

# Evaluation System

The evaluation for this assignment will be based on the following criteria:

1.  **REQUIREMENT FULLFILMENT**
2.  **JAVASCRIPT USAGE**
3.  **PROBLEM-SOLVING & APPLICATION**
4.  **CODE CLARITY**

---

# How to Upload your Challenge

Check this module: [click this](https://orchid-clematis-3e4.notion.site/Panduan-Penggunaan-Git-Untuk-Upload-Assignment-e2d80a19b3684f5d8f1a4209dcf85445?pvs=73)

---

🎉 Congratulations on working on this assignment! Utilize the _playground_ feature in Figma to help you understand how the design should look on various devices. Keep experimenting and don't hesitate to look for references if you encounter difficulties. You can definitely produce great work! 🚀 Keep up the spirit, cheers! 🎈
