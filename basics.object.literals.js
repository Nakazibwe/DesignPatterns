/* eslint-disable no-console */
// First Book object.
const book1 = {
  title: 'Dont Be No Fool For No Man',
  author: 'Gryc.K.Ushindi',
  year: '2022',
  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};

// Second Book object
const book2 = {
  title: 'When We Know Better, We Do Better',
  author: 'Krystl.H.Ushindi',
  year: '2023',
  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};

// Logging book1 summary
console.log(book1.getSummary());

// Logging book2 summary.
console.log(book2.getSummary());
// Logging the values of book2
console.log(Object.values(book2));
// Logging the keys of book2
console.log(Object.keys(book2));