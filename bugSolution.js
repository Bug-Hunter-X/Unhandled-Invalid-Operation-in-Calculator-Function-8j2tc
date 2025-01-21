function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function calculate(operation, a, b) {
  if (operation === 'add') {
    return add(a, b);
  } else if (operation === 'subtract') {
    return subtract(a, b);
  } else {
    throw new Error('Invalid operation: ' + operation);
  }
}

console.log(calculate('add', 5, 3)); // Output: 8
console.log(calculate('subtract', 5, 3)); // Output: 2

try {
  console.log(calculate('multiply', 5, 3)); // Throws an error
} catch (error) {
  console.error(error.message); // Output: Invalid operation: multiply
}
