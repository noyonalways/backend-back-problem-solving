/* 
===== Task: Array Filtering and Mapping =====
Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result. 
*/

interface IPerson {
  name: string;
  age: number;
  gender: "male" | "female";
}

const peoples: IPerson[] = [
  { name: "Rahim", age: 25, gender: "male" },
  { name: "Karim", age: 30, gender: "male" },
  { name: "Fatima", age: 28, gender: "female" },
  { name: "Ayesha", age: 22, gender: "female" },
  { name: "Hasan", age: 35, gender: "male" },
  { name: "Nusrat", age: 27, gender: "female" },
  { name: "Shakib", age: 40, gender: "male" },
  { name: "Sumaiya", age: 24, gender: "female" },
  { name: "Imran", age: 32, gender: "male" },
  { name: "Rashida", age: 29, gender: "female" },
];

function getMaleNames(people: IPerson[]) {
  const maleNames = [];
  for (let i = 0; i < people.length; i++) {
    if (people[i].gender !== "female") {
      maleNames.push(people[i].name);
    }
  }
  return maleNames;
}

// Example usage
console.log(getMaleNames(peoples));
