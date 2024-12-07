/* 
===== Task: Leap Year Checker =====
Write a function that determines whether a given year is a leap year.
Example: Happy New Year
*/

// Function to check if a year is a leap year
function isLeapYear(year: number) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year, "is leap a year");
  } else {
    console.log(year, "is not a leap year");
  }
}

// Example usage
isLeapYear(2024);
isLeapYear(2025);
