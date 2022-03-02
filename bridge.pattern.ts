/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable max-classes-per-file */
/* eslint-disable lines-between-class-members */
// Step 1: Create a bridge interface.

// Step 2: Create concrete bridge implementer classes implementing the interface.

// Step 3: Create an abstract class using bridge interface.

// Step 4: Create concrete class extending the abstract class.

//  Step 5: Use the concrete interface implementer classes and concrete abstract classes to instantiate objects.

interface IColor {
    giveColor():string;
}
class Green implements IColor {
  giveColor():string {
    return 'This shape is green';
  }
}
class Yellow implements IColor {
  giveColor():string {
    return 'This shape is yellow';
  }
}
abstract class Shape {
  color:IColor;
  constructor(color:IColor) {
    this.color = color;
  }
    abstract createShape():string;
    getShapeColor() {
      return this.color.giveColor();
    }
}
class Triangle extends Shape {
  createShape():string {
    this.color.giveColor();
    return 'This shape is a triangle';
  }
}
class Square extends Shape {
  createShape():string {
    this.color.giveColor();
    return 'This shape is a square';
  }
}
// Instatiations
const greenSquare:Square = new Square(new Green());
console.log(greenSquare.createShape());
console.log(greenSquare.getShapeColor());

const yellowTriangle:Triangle = new Triangle(new Yellow());
console.log(yellowTriangle.createShape());
console.log(yellowTriangle.getShapeColor());
