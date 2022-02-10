/* eslint-disable no-console */
// Constructor.
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

// Book Prototype(getSummary).
Book.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};
// Book Prototype(getAge).
Book.prototype.getAge = function () {
  const years = new Date().getFullYear() - this.year;
  return `${this.title} is ${years} years old`;
};
// Book Prototype(revise)/Change Year.
Book.prototype.revise = function (revisedYear) {
  this.year = revisedYear;
  this.revised = true;
};

// Object Instatiation.
const book1 = new Book('Dont Be No Fool For No Man', 'Gryc.K.Ushindi', '2022');
const book2 = new Book('When We Know Better, We Do Better', 'Krystl.H.Ushindi', '2022');

// Logging book1
console.log(book1);

// Logging the getSummary method of book2.
console.log(book2.getSummary());

// Logging the age of book2.
console.log(book2.getAge());

// Logging the book2 revised.
book2.revise('2018');
console.log(book2);