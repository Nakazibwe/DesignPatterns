/* eslint-disable new-cap */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-new-wrappers */
// Literals in Javascript.
// Most Types in JS can be created in 3 different ways.

// Strings.
const name1 = 'Grace';// String created Literally.
const name2 = String('Grace'); // A String created using a string factory.
const name3 = new String('Grace');// A string object constructor.

// Numbers.
const age = 120;// Number created Literally.
const age2 = Number(121); // A number created using a Number Factory.
const age3 = new Number(122); // Number Object Constructor.

// Booleans.
const conditionTest1 = true; // Boolean created literally
const conditionTest2 = Boolean(false); // A Boolean created using a Boolean Factory.
const conditionTest3 = new Boolean(true); // Boolean Object Constructor.
// Different ways of creating objects.
// 1. Using an Object Literal
const person = { // Created Literally
  name: 'Grace',
  age: 53,
  talk() {
    return `Name is : ${this.name} `;
  },
};
console.log(person.talk());

// 2. Using an Object Factory
function factoryFunction() { // Creates objects and returns them.
  return {
    property1: 'value1',
    propertyN: 'valueN',
    method1() {},
  };
}
// Factory
function human(firstnameArg, lastnameArg, ageArg) {
  return {
    firstname: firstnameArg,
    lastname: lastnameArg,
    age: ageArg,
    talk() {
      return `${this.firstname} is ${this.age} years old`;
    },
  };
}
// Objects
const obj1 = human('Ushindi', 'Haddish', 40);
console.log(obj1.talk());
// 3. Uisng an object Constructor.
function ConstructorName() { // Constructor function creates objects
  this.propertyH = 'valueH';
  this.propertyG = 'valueG';
  this.methodj = function () {
    console.log(this.propertyH);
  };
}
// Constructor function
function Humanbeing(firstNameArg, lastNameArg, ageArg) {
  this.firstname = firstNameArg;
  this.lastname = lastNameArg;
  this.age = ageArg;
  this.talk = function () {
    return `${this.firstname} is ${this.age} years old`;
  };
}
const humanBeing1 = new Humanbeing('Haddish', 'Ushindi', 50);
console.log(humanBeing1.talk());
// 4. Using a class.
class Ugandan { // A class uses a constructors to create objects.
  // constructor
  constructor(nameParamenter, tribeParamenter, ageParameter) {
    this.name = nameParamenter;
    this.tribe = tribeParamenter;
    this.age = ageParameter;
  }
}
