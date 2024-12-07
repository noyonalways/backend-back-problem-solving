/* 
===== Task: Function Composition =====
Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.
*/

// Function to square a number
const square = (num: number) => num * num;

// Function to double a number
const double = (num: number) => num * 2;

// Function to add 5 to a number
const addFive = (num: number) => num + 5;

const composeFunctions = (num: number) => addFive(double(square(num)));

// Example usage
console.log(composeFunctions(10));
