// .................for loop .............

for (let index = 0; index <= 10; index++) {
    const element = index;
    // console.log(element);
    
     
}

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element === 5) {
       // console.log("5 is best number");
     }
     //console.log(element);
    
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
       // console.log(`Inner loop value ${j} and inner loop ${i}`);
        // console.log(i + '*' + j + '=' + i*j );
        // console.log(i+ '*' +j + '=' + i*j);
    }  
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
      //  console.log(i+ '*' +j +'='+ i*j);
        
    }
    
}

 let myArray = ["Umer", "Shehzad", "Hassan"]
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
   // console.log(element);
    
}


// ["", "", ""]
// [{}, {}, {}]


// ................break and continue..............

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
       // console.log( `Detected 5`);
        break
    }
    // console.log(`Value of i is ${index}`);
    
}

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        // console.log( `Detected 5`);
        continue
    }
    // console.log(`Value of i is ${index}`);
    
}

let index = 0
while (index <= 10) {
    // console.log(`Value of index is ${index}`);
    index = index + 2
}




// // let myArray = ["Umer","Shehzad"]
// // let arr = 0
// // while (arr myArray.length ) {
//    // console.log(`Value is ${myArray[arr]}`);
//     arr = arr + 1
// }

 let run = 1
do {
    // console.log(`run is ${run}`);
    run = run +1
} while ( run <= 10);


// ................. for of loop ............

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greeting = "Hello Umer"
for (const greet of greeting) {
    //console.log(`Each charter is ${greet}`);
}

// ............... maps

const map = new Map()
map.set('PAK',"Pakistan")
map.set('IND',"India")
map.set('FR',"France")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

// ............ loops for in.................

const myObject = {
    js: 'javascript',
    rb: 'ruby',
    cpp: 'c++',
}

for (const key in myObject) {
    // console.log((`${key} is shortcut of ${myObject[key]}`));
}

const programming = ["js", "c++", "rb" , "cpp"]

for (const key in programming) {
    // console.log(programming[key]);
}
 
// .............. for each loop.......................

const coding = ["js", "ruby", "java", "cpp", "php"]
coding.forEach ( function (val) {
    // console.log(val);
} )

// .... for each loop in arrow function ............

coding.forEach ( (val) => {
   // console.log(val);
} )

coding.forEach ( (val, index, arr) => {
   // console.log(val, index, arr);
} )


const myCoding = [
    {
        languagename : "javascript",
        languagefile: "js"
    },
    {
        languagename : "Java",
        languagefile: "java"
    },
    {
        languagename : "cpp",
        languagefile: "c++"
    },
]


myCoding.forEach( (item) => {
    // console.log(item.languagename);
} )


// const youcoding = ["js", "rb", "java"]
// youcoding.forEach( (item) => {
//     console.log(item);
// } )

//......... Basic filter............

// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter( (num) => num > 4 )
// console.log(newNums);

const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNums.filter( (num) => {
   return num > 4
} )
// console.log(newNums);

let userBooks = book.filter( (bk) => bk.genre === 'History')

userBooks = book.filter ( (bk) => {
    return bk.publish >= 1995 && bk.genre ==='History'
})
userBooks = book.filter ( (bk) => {
    return bk.publish >= 1995 
})

// console.log(userBooks);
