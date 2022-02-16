/* eslint-disable no-console */
// Object Of Protos.
const bookProtos = {
  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
  getAge() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
  },
};
// Create Object.
// Book1
const book1 = Object.create(bookProtos);
book1.title = 'Book: When We Know Better, We Do Better';
book1.author = 'Krystl.H.Ushindi';
book1.year = '2022';
console.log(book1);

// Book2
const book2 = Object.create(bookProtos, {
  title: { value: 'Book : Dont Be No Fool For No Man' },
  author: { value: 'Gryc.K.Ushindi' },
  year: { value: '2022' },
});
console.log(book2);
