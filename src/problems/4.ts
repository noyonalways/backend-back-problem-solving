/* 
===== Task: Sorting Objects =====
Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.
*/

interface ICar {
  make: string;
  model: string;
  year: number;
}

const cars: ICar[] = [
  { make: "Toyota", model: "Corolla", year: 2020 },
  { make: "Honda", model: "Civic", year: 2019 },
  { make: "Ford", model: "Mustang", year: 2021 },
  { make: "Chevrolet", model: "Camaro", year: 2022 },
  { make: "BMW", model: "3 Series", year: 2020 },
  { make: "Audi", model: "A4", year: 2021 },
  { make: "Mercedes-Benz", model: "C-Class", year: 2020 },
  { make: "Hyundai", model: "Elantra", year: 2019 },
  { make: "Nissan", model: "Altima", year: 2021 },
  { make: "Volkswagen", model: "Golf", year: 2020 },
];

function sortCarsByYear(cars: ICar[]) {
  return cars.sort((a, b) => a.year - b.year);
}

// Example usage
console.log(sortCarsByYear(cars));
