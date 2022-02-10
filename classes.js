//Person class.
class Person {
    
    //Constructor function
    constructor(name,DOB,height,weight){
      this.name = name,
      this.DOB = DOB,
      this.height = height,
      this.weight = weight
    }
    //Method for BMI
    BMI(){
       const bmi =  this.weight * this.height/2
       return `Dear ${this.name} your body mass index is ${bmi}`
    }
}
const person1 =  new Person('Ushindi','13th December',789, 64);
console.log(person1);
console.log(person1.BMI());