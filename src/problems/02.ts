/* 
===== Task: Object Manipulation =====
Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.
*/

interface IBook {
  title: string;
  author: string;
  year: number;
}

const books: IBook[] = [
  { title: "Clean Code", author: "Robert C. Martin", year: 2008 },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt and David Thomas",
    year: 1999,
  },
  { title: "You Don't Know JS", author: "Kyle Simpson", year: 2014 },
  {
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    year: 2008,
  },
  {
    title: "Design Patterns: Elements of Reusable Object-Oriented Software",
    author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
    year: 1994,
  },
  { title: "The Clean Coder", author: "Robert C. Martin", year: 2011 },
  {
    title: "Introduction to Algorithms",
    author:
      "Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein",
    year: 2009,
  },
  { title: "Eloquent JavaScript", author: "Marijn Haverbeke", year: 2018 },
  { title: "Code Complete", author: "Steve McConnell", year: 2004 },
  {
    title: "The Art of Computer Programming",
    author: "Donald E. Knuth",
    year: 1968,
  },
];

function getBookTitles(books: IBook[]): string[] {
  return books.map((book) => book.title);
}

// Example usage
console.log(getBookTitles(books));
