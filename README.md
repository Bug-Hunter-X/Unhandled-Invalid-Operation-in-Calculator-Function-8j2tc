# Unhandled Invalid Operation in Calculator Function

This repository demonstrates a common but subtle bug in JavaScript: silently ignoring invalid inputs instead of handling them gracefully.

## Bug Description

The `calculate` function takes an operation ('add' or 'subtract') and two numbers as input. It performs the specified operation and returns the result. However, if an invalid operation is provided, it silently returns 0 without notifying the user of the error.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js` and run the code using Node.js or a browser's console.
3. Observe that the function returns 0 when an invalid operation is passed in.

## Solution

The `bugSolution.js` file provides a corrected version of the function. It explicitly checks for valid operations and throws an error if an invalid operation is provided, thereby preventing unexpected behavior.

## Lessons Learned

- Always explicitly handle invalid inputs and potential errors to prevent unexpected behavior and improve code robustness.
- Consider throwing errors to alert users to invalid inputs instead of silently returning default values.