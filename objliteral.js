//Grace Object Literal
const grace = {
    "first name" :'Grace',
    height: 300,
    color:'red'
}
console.log(grace["first name"]);

// //Dot notation.
console.log(grace.name)

// //Bracket notation
console.log(grace['height']);

for (const key in grace) {
    console.log(`${key} : ${grace[key]}`);
}

// Person Object Literal.
const person = {
firstName : 'Grace',
lastName :'Ushindi',
address:'25 street Toronto',
nationality : 'Ugandan',
age: 48
}
