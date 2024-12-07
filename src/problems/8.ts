/* 
===== Task: Unique Values =====
Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers. Print the result.
*/

const duplicateNumbers = [1, 2, 3, 4, 5, 2, 3, 4, 5];

function getUniqueValues(numbers: number[]): number[] {
  const uniqueNumbers: number[] = [];

  for (let i = 0; i < numbers.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < uniqueNumbers.length; j++) {
      if (uniqueNumbers[j] === numbers[i]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      uniqueNumbers.push(numbers[i]);
    }
  }

  return uniqueNumbers;
}

// Example usage:
const uniqueArray = getUniqueValues(duplicateNumbers);
console.log(uniqueArray);
