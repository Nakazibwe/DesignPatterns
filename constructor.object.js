/* eslint-disable no-console */
// Constructor.
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.getSummary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  };
}
// Object Instatiation.
const book1 = new Book('Dont Be No Fool For No Man', 'Gryc.K.Ushindi', '2022');
const book2 = new Book('When We Know Better, We Do Better', 'Krystl.H.Ushindi', '2023');

// Logging book1
console.log(book1);

// Logging the getSummary method of book2.
console.log(book2.getSummary());