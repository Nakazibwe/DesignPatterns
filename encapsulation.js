/* eslint-disable max-classes-per-file */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
// Encapsulation
var Person = /** @class */ (function () {
    function Person() {
        // Attributes.
        this.name = 'Ushindi';
    }
    // methods.
    Person.prototype.writeName = function () {
        return "Person name: ".concat(this.name);
    };
    return Person;
}());
var person1 = new Person();
console.log(person1.writeName());
console.log(person1);
// Private
var Citizen = /** @class */ (function () {
    // constructor.
    function Citizen(nameArg) {
        this.name = nameArg;
    }
    // NIN setter.
    Citizen.prototype.setNIN = function (ninArg) {
        this.NIN = ninArg;
    };
    // NIN getter.
    Citizen.prototype.getNIN = function () {
        return this.NIN;
    };
    return Citizen;
}());
var citizen1 = new Citizen('Haddish.K.Ushindi');
console.log(citizen1);
citizen1.setNIN('CF950003456789GGF');
console.log(citizen1.getNIN());
console.log(citizen1);
