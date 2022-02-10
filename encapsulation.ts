/* eslint-disable max-classes-per-file */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
// Encapsulation
class Person {
  // Attributes.
  public name = 'Ushindi';

  private password;

  protected email;

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
  public name;

  private NIN;

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
