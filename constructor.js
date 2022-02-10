// Person Constuctor Function
function Person (name,DOB,height,weight){
this.name = name,
this.DOB = DOB,
this.height = height,
this.weight = weight,
this.activity = function talk(){
return `=> Am ${this.name}  born on ${this.DOB} with a height of ${this.height} and ${this.weight} weight `
}
}

const person1 = new Person('Ushindi', '12th May', '400cm' ,'52kgs')
console.log(person1.activity());