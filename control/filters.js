//const coding=['ruby','java','javascript','python','cpp'];
// for each not return any values..

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const num = myNum.filter((num) => num > 4); // it return the values but required condition for filters
const num1 = myNum.filter((num) => {
  return num > 4;
}); // it return the values but required condition for filters

// console.log(num);
// console.log(num1);

// use foreach loop by creating new empty array and then push them new array by using for Each loop

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];


const userBooks=books.filter((bk)=>{
    return bk.edition>2014;
})

const userB=books.filter((book)=> book.genre==='History')
// console.log(userBooks);
// console.log(userB);