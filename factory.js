// PersonFactory function
function personFactory(name,DOB,height,weight){
    return{
       name:name,
       DOB:DOB,
       height:height,
       weight:weight,
       talk(){
           return `=> Am ${name}, a factory object born on ${DOB}, with a height of ${height} and weight of ${weight} am happy to be here.`
       }
    }
} 
//Grace person object
const Grace = personFactory('Grace','13th December','3cm','6kgs')
console.log(Grace.talk());
const Ushindi = personFactory('Ushindi', '23rd May', '4cm', '2kgs')
console.log(Ushindi.talk());

const person1 = personFactory('Joshua Murari', '1st January', '200cm', '250kgs')
console.log(person1.talk());

for (const key in person1) {
    console.log(`${key}: ${person1[key]}`)
}
