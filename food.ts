interface Food{
    price():number
}

class VegFood implements Food{
    price(): number {
       return 2000;
    }
}

class ChickenFood implements Food{
    price(): number {
       return 4000;
    }
}

class FoodDecorator implements Food{
    protected food: Food

    constructor(newFood: Food){
        this.food = newFood
    }

    price(): number {
        return this.food.price();
    }
    
}
class ChineseDecorator extends FoodDecorator{
    price(): number {
        return this.food.price() + 4000;
    }
}

class IndianDecorator extends FoodDecorator{
    price(): number {
        return this.food.price() + 3000;
    }
}

const veg = new VegFood()
const chicken = new ChickenFood()
console.log(veg.price())
const VegChinese = new ChineseDecorator(veg)
const IndianChineseVeg = new IndianDecorator(VegChinese)

const ChickenChinese = new ChineseDecorator(chicken)
const IndianChineseChicken = new IndianDecorator(VegChinese)
const IndianChineseChickenVeg = new IndianDecorator(IndianChineseChicken)

console.log(IndianChineseChickenVeg.price())