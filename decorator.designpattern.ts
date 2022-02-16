/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
/* eslint-disable max-classes-per-file */
// Food anology implementation
interface Food{
    price():number
}

class VegFood implements Food {
  price(): number {
    return 2000;
  }
}

class FoodDecorator implements Food {
  protected food: Food;

  constructor(newFood: Food) {
    this.food = newFood;
  }

  price(): number {
    return this.food.price();
  }
}

class ChineseDecorator extends FoodDecorator {
  price():number {
    return this.food.price() + 4000;
  }
}

class IndianDecorator extends FoodDecorator {
  price():number {
    return this.food.price() + 3000;
  }
}

// const veg = new VegFood();
// const vegChinese = new ChineseDecorator(veg);
// console.log(vegChinese.price());

// Computer analogy implementation.
// Creating an interface
interface Computer{
    getprice():number;
}

// Concrete classes/subtypes.
class Desktop implements Computer {
  getprice(): number {
    return 1500;
  }
}
class Laptop implements Computer {
  getprice(): number {
    return 1000;
  }
}
// Decorator.
class DecoratedComputer implements Computer {
  protected computer: Computer;

  constructor(computer:Computer) {
    this.computer = computer;
  }

  getprice(): number {
    return 0;
  }
}

// Subclasses of type ComputerDecorator.
class ComputerWithMoreRAM extends DecoratedComputer {
  getprice():number {
    return this.computer.getprice() + 300;
  }
}
class ComputerWithMouse extends DecoratedComputer {
  getprice():number {
    return this.computer.getprice() + 50;
  }
}
class ComputerWithKeyboard extends DecoratedComputer {
  getprice():number {
    return this.computer.getprice() + 60;
  }
}
// Instatance of Laptop.
let computer:Computer = new Laptop();
console.log(`The initial price of the laptop is : ${computer.getprice()}`);

// Instance of DecoratedComputer with more RAM.
computer = new ComputerWithMoreRAM(computer);
console.log(`This is the price of the laptop with more RAM added : ${computer.getprice()}`);

// Instance of DecoratedComputer with A mouse.
computer = new ComputerWithMouse(computer);
console.log(`This is the price of the laptop with a mouse added : ${computer.getprice()}`);

// Instance of DecoratedComputer with A mouse.
computer = new ComputerWithKeyboard(computer);
console.log(`This is the price of the laptop with a keyboard added :  ${computer.getprice()}`);

// Instance of DecoratedComputer with 2 more RAM chips.
computer = new ComputerWithMoreRAM(computer);
console.log(`This is the price of the laptop with  2 more RAM chips added :  ${computer.getprice()}`);
