/* 
===== Task: Advanced Sorting =====
Create an array of objects representing students with 'name' and 'grades' properties. Write a function to sort the students by average grade in descending order.
*/

interface IStudent {
  name: string;
  grades: number[];
}

const students: IStudent[] = [
  {
    name: "John Doe",
    grades: [85, 90, 82, 78, 95],
  },
  {
    name: "Jane Smith",
    grades: [70, 85, 92, 88, 90],
  },
  {
    name: "Alice Johnson",
    grades: [80, 95, 88, 92, 85],
  },
  {
    name: "Bob Brown",
    grades: [75, 80, 85, 90, 92],
  },
  {
    name: "Mary Wilson",
    grades: [88, 90, 85, 92, 87],
  },
];

function calculateAverage(grades: number[]): number {
  const sum = grades.reduce((acc, grade) => acc + grade, 0);
  return sum / grades.length;
}

// Function to sort students by their average grade in descending order
function sortStudentsByAverageGrade(students: IStudent[]): IStudent[] {
  return students
    .map((student) => ({
      ...student,
      average: calculateAverage(student.grades),
    }))
    .sort((a, b) => {
      return b.average - a.average;
    });
}

// Example usage
console.log(sortStudentsByAverageGrade(students));
