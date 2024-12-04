console.log(2 > 1);    // node 04_comparision.js

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);


///  ....................Prinitive 
///.. strings, boolean, Number, null , symbol,
///..undefined, BigInt

console.log(undefined == 0);
console.log(undefined > 0);

//===

console.log("2" === 2);

/// .............Non primitive
////........ array, Objects, Function

const heros = ["umer", "shehzad", "Hassan"];
let myObj = {
    name: "umer"
     }

const myFunction = function(){
    console.log("Hello World");
}


console.log(typeof myFunction);



//.....................Memory
//.... stack use (primitive), Heap use(non primitive/referce)

let myYouTubename = "Umer.com"

let anothername = myYouTubename
anothername = "Shehzad"

console.log(myYouTubename);
console.log(anothername);

let userOne = {
    email: "umer@google.com"
}

let userTwo = userOne
userTwo.email = "Shehzad.google"

console.log(userOne.email);
console.log(userTwo.email);