/* 
===== Task: Find Maximum Value =====
Write a function that takes an array of numbers and returns the maximum value.
*/

const numberList: number[] = [45, 95, 455, 421, 212, 654, 124, 102, 301];

function getMaxValue(numbers: number[]) {
  let maxValue: number = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxValue) {
      maxValue = numbers[i];
    }
  }
  return maxValue;
}

// Example usage
console.log(getMaxValue(numberList));
