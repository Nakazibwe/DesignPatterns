var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var VegFood = /** @class */ (function () {
    function VegFood() {
    }
    VegFood.prototype.price = function () {
        return 2000;
    };
    return VegFood;
}());
var FoodDecorator = /** @class */ (function () {
    function FoodDecorator(newFood) {
        this.food = newFood;
    }
    FoodDecorator.prototype.price = function () {
        return this.food.price();
    };
    return FoodDecorator;
}());
var ChineseDecorator = /** @class */ (function (_super) {
    __extends(ChineseDecorator, _super);
    function ChineseDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChineseDecorator.prototype.price = function () {
        return this.food.price() + 4000;
    };
    return ChineseDecorator;
}(FoodDecorator));
var IndianDecorator = /** @class */ (function (_super) {
    __extends(IndianDecorator, _super);
    function IndianDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IndianDecorator.prototype.price = function () {
        return this.food.price() + 3000;
    };
    return IndianDecorator;
}(FoodDecorator));
// Concrete classes/subtypes.
var Desktop = /** @class */ (function () {
    function Desktop() {
    }
    Desktop.prototype.getprice = function () {
        return 1500;
    };
    return Desktop;
}());
var Laptop = /** @class */ (function () {
    function Laptop() {
    }
    Laptop.prototype.getprice = function () {
        return 1000;
    };
    return Laptop;
}());
// Decorator.
var DecoratedComputer = /** @class */ (function () {
    function DecoratedComputer(computer) {
        this.computer = computer;
    }
    DecoratedComputer.prototype.getprice = function () {
        return 0;
    };
    return DecoratedComputer;
}());
// Subclasses of type ComputerDecorator.
var ComputerWithMoreRAM = /** @class */ (function (_super) {
    __extends(ComputerWithMoreRAM, _super);
    function ComputerWithMoreRAM() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ComputerWithMoreRAM.prototype.getprice = function () {
        return this.computer.getprice() + 300;
    };
    return ComputerWithMoreRAM;
}(DecoratedComputer));
var ComputerWithMouse = /** @class */ (function (_super) {
    __extends(ComputerWithMouse, _super);
    function ComputerWithMouse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ComputerWithMouse.prototype.getprice = function () {
        return this.computer.getprice() + 50;
    };
    return ComputerWithMouse;
}(DecoratedComputer));
var ComputerWithKeyboard = /** @class */ (function (_super) {
    __extends(ComputerWithKeyboard, _super);
    function ComputerWithKeyboard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ComputerWithKeyboard.prototype.getprice = function () {
        return this.computer.getprice() + 60;
    };
    return ComputerWithKeyboard;
}(DecoratedComputer));
// Instatance of Laptop.
var computer = new Laptop();
console.log("The initial price of the laptop is : ".concat(computer.getprice()));
// Instance of DecoratedComputer with more RAM.
computer = new ComputerWithMoreRAM(computer);
console.log("This is the price of the laptop with more RAM added : ".concat(computer.getprice()));
// Instance of DecoratedComputer with A mouse.
computer = new ComputerWithMouse(computer);
console.log("This is the price of the laptop with a mouse added : ".concat(computer.getprice()));
// Instance of DecoratedComputer with A mouse.
computer = new ComputerWithKeyboard(computer);
console.log("This is the price of the laptop with a keyboard added :  ".concat(computer.getprice()));
// Instance of DecoratedComputer with 2 more RAM chips.
computer = new ComputerWithMoreRAM(computer);
console.log("This is the price of the laptop with  2 more RAM chips added :  ".concat(computer.getprice()));
