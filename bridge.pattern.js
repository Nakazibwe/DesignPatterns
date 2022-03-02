/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable max-classes-per-file */
/* eslint-disable lines-between-class-members */
// Step 1: Create a bridge interface.
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
var Green = /** @class */ (function () {
    function Green() {
    }
    Green.prototype.giveColor = function () {
        return 'This shape is green';
    };
    return Green;
}());
var Yellow = /** @class */ (function () {
    function Yellow() {
    }
    Yellow.prototype.giveColor = function () {
        return 'This shape is yellow';
    };
    return Yellow;
}());
var Shape = /** @class */ (function () {
    function Shape(color) {
        this.color = color;
    }
    Shape.prototype.getShapeColor = function () {
        return this.color.giveColor();
    };
    return Shape;
}());
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Triangle.prototype.createShape = function () {
        this.color.giveColor();
        return 'This shape is a triangle';
    };
    return Triangle;
}(Shape));
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Square.prototype.createShape = function () {
        this.color.giveColor();
        return 'This shape is a square';
    };
    return Square;
}(Shape));
// Instatiations
var greenSquare = new Square(new Green());
console.log(greenSquare.createShape());
console.log(greenSquare.getShapeColor());
var yellowTriangle = new Triangle(new Yellow());
console.log(yellowTriangle.createShape());
console.log(yellowTriangle.getShapeColor());
