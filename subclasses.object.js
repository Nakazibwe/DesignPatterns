/* eslint-disable quotes */
/* eslint-disable no-console */
// eslint-disable-next-line max-classes-per-file
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
}

// Magazine SubClass.
class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month = month;
  }
}

// Instatiate Magazine.
const mag1 = new Magazine('Magazine: Dont Be No Fool For No Man', 'Gryc.K.Ushindi', '2022', 'December');
console.log(mag1)