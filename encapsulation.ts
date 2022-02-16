/* eslint-disable class-methods-use-this */
/* eslint-disable quotes */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
// Encapsulation
class Person {
  // Attributes.
  public name = 'Ushindi';

  private password: any;

  protected email: any;

  // methods.
  writeName() {
    return `Person name: ${this.name}`;
  }
}
const person1 = new Person();
console.log(person1.writeName());
console.log(person1);

// Private
class Citizen {
  public name: string;

  private NIN: string;

  // constructor.
  constructor(nameArg:string) {
    this.name = nameArg;
  }

  // NIN setter.
  public setNIN(ninArg:string) {
    this.NIN = ninArg;
  }

  // NIN getter.
  public getNIN() {
    return this.NIN;
  }
}
const citizen1 = new Citizen('Haddish.K.Ushindi');
console.log(citizen1);
citizen1.setNIN('CF950003456789GGF');
console.log(citizen1.getNIN());
console.log(citizen1);

class Car {
  // Attributes
  public tyres: number;

  // Tyres can be accessed within the class and by subclasses
  protected gears: number;

  // constructor.
  constructor(tyresArg: any, gearsArg: any) {
    this.tyres = tyresArg;
    this.gears = gearsArg;
  }

  drive() {
    return this.tyres * this.gears;
  }
}
class Ugandan {
  public surname: any;

  public firstname: any;

  constructor(surname: any, firstname: any) {
    this.surname = surname;
    this.firstname = firstname;
  }

  votes() {
    return `Vote for president`;
  }
}
class Muganda extends Ugandan {
  public clan: any;

  constructor(surname: any, firstname: any, clan: any) {
    super(surname, firstname);
    this.clan = clan;
  }
}
// Multilevel inheritance
class X {
  methodX() {
    console.log("Class X method");
  }
}

class Y extends X {
  methodY() {
    console.log("class Y method");
  }
}
class Z extends Y {
  methodZ() {
    console.log("class Z method");
  }
}
// Multiple inheritance.
class A {
  methodA() {
    console.log('Class A method');
  }
}
class B {
  methodB() {
    console.log('Class B method');
  }
}
class C extends A , B{
  methodC(){
    console.log('Class C method');
  }
}
class Human{
  name: any;

  eat(){
      console.log(`${this.name} eats when hungry.`)
  }
}

class Student extends Human{
  // variables
  rollnumber: any;

  // constructors
  constructor(rollnumber: number, name1: string){
      super(); // calling Parent's constructor
      this.rollnumber = rollnumber
      this.name = name1
  }

  // functions
  displayInformation(){
      console.log(`Name : ${this.name} , Roll Number : ${this.rollnumber}`)
  }

  // overriding super class method
  eat():void{
      console.log(`${this.name} eats during break.`)
  }
}

var student1 = new Student(2, "Rohit")

student1.displayInformation()
student1.eat()

interface Animal{

  sound();
}
class Dog implements Animal{
sound(){
  console.log('A dog barks')
};
}
class Cat implements Animal{
  sound(){
    console.log('A cat meows')
  };
}
class Snake implements Animal{
  sound() {
      console.log('A snake hisses')
  }
}

class Sale {
  List<SalesLineItem> salesLineItem
  = new ArrayList<SalesLineItem>();
  //...
  public  addLineItem(ProductSpecification prodSpec,int quantity) {
      salesLineItem.add(new SalesLineItem(prodSpec, quantity);
return this.salesLineItem;
  }
}