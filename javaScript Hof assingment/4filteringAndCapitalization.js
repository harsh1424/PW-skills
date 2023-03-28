const books = [
  {
    author: "Harper Lee",
    title: "To Kill a Mockingbird",
    year: 1960,
  },
  {
    author: "Chimamanda Ngozi Adichie",
    title: "Americanah",
    year: 2013,
  },
  {
    author: "George Orwell",
    title: "1984",
    year: 1949,
  },
  {
    author: "Ta-Nehisi Coates",
    title: "Between the World and Me",
    year: 2015,
  },
  {
    author: "F. Scott Fitzgerald",
    title: "The Great Gatsby",
    year: 1925,
  },
  {
    author: "J.D. Salinger",
    title: "The Catcher in the Rye",
    year: 1951,
  },
  {
    author: "Chimamanda Ngozi Adichie",
    title: "Americanah",
    year: 2013,
  },
  {
    author: "Tara Westover",
    title: "Educated",
    year: 2018,
  },
];

const filteredBooks = books.filter(book => book.year >= 2010 )
const capitalizedAuthor = filteredBooks.map(book => ({author: book.author.toUpperCase(), title: book.title, year:book.year}))

console.log(capitalizedAuthor)