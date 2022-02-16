/* eslint-disable quotes */
/* eslint-disable no-console */
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }

  getAge() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
  }

  revise(revisedYear) {
    this.year = revisedYear;
    this.revised = true;
  }

  static topBookStore() {
    return `Ushindi Investments`;
  }
}
// Instatiate an object
const book1 = new Book('Book: Dont Be No Fool For No Man', 'Gryc.K.Ushindi', '2020');
console.log(book1);
console.log(book1.getSummary());
console.log(book1.getAge());
book1.revise('2018');
console.log(book1);

// Logging a static method.
console.log(Book.topBookStore());
