const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.897
console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString());


///..........................maths
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));

console.log(Math.random());
// console.log(Math.random()*10 + 1);
console.log((Math.random()*10) + 1);     // this value is to use by gameing

const min = 50
const max = 60

console.log(Math.floor(Math.random() * (max - min +1 ) + min));

