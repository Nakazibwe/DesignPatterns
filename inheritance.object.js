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
