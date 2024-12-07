/* 
===== Task: Find and Modify =====
Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.
*/

interface IPerson1 {
  name: string;
  age: number;
}

const people: IPerson1[] = [
  { name: "Rahim", age: 25 },
  { name: "Karim", age: 30 },
  { name: "Fatima", age: 28 },
  { name: "Fatima", age: 21 },
  { name: "Ayesha", age: 22 },
  { name: "Hasan", age: 35 },
];

function modifyAgeByName(people: IPerson1[], name: string): IPerson1[] {
  return people.map((person) =>
    person.name === name ? { ...person, age: person.age * 2 } : person
  );
}

// Example usage
console.log(modifyAgeByName(people, "Fatima"));
