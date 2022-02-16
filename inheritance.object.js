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

// Magazine Constructor.
function Magazine(title, author, year, month) {
  Book.call(this, title, author, year);
  this.month = month;
}
// Inherit prototype.
Magazine.prototype = Object.create(Book.prototype);

// Instatiate Magazine Object.
const mag1 = new Magazine('Magazine: Dont Be No Fool For No Man', 'Gryc.K.Ushindi', '2022', 'December');
console.log(mag1);
// Logging mag1 getSummary.
console.log(mag1.getSummary());

// Using Magazine Constructor.
Magazine.prototype.constructor = Magazine;
console.log(mag1);