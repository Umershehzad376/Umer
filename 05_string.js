const name = "Shehzad"
const repoCount = 50

console.log(name + repoCount + 'Value');

console.log('Hello my name is ${name} and my repoCount is ${repoCount}');

const gameName = new String("Shehzad-umer-malik")

console.log(gameName);

console.log(gameName.length);

console.log(gameName.charAt(4));
console.log(gameName.indexOf('z'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-7, 3)
console.log(anotherString);


const newStringOne = "   Umer   "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://Umer.com/umer%20malik"
console.log(url.replace('%20', '-'))
console.log(gameName.split('-'));