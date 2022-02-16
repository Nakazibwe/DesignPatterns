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
var ChickenFood = /** @class */ (function () {
    function ChickenFood() {
    }
    ChickenFood.prototype.price = function () {
        return 4000;
    };
    return ChickenFood;
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
var veg = new VegFood();
var chicken = new ChickenFood();
console.log(veg.price());
var VegChinese = new ChineseDecorator(veg);
var IndianChineseVeg = new IndianDecorator(VegChinese);
var ChickenChinese = new ChineseDecorator(chicken);
var IndianChineseChicken = new IndianDecorator(VegChinese);
var IndianChineseChickenVeg = new IndianDecorator(IndianChineseChicken);
console.log(IndianChineseChickenVeg.price());
