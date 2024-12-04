// // singleton
// // object.create

// // object literals

// const jsUser = {
//     name: "Umer",
//     // mysym: "key1",
//     age: 20,
//     location: "Sargodha",
//     email: "Umer@gmail.com",
//     isLoggedIn: "false",
//     lastLoginDays: ["Monday", "Saturday"]
// }


// // console.log(jsUser.isLoggedIn);
// // console.log(jsUser["email"])
// // console.log(jsUser[mysym])

// jsUser.email = "Umer@goole.com"
// Object.freeze(jsUser)
// jsUser.email = "umer@.com"

// // console.log(jsUser.email)

// jsUser.greeting = function(){
//     console.log("Holle js user");
// }

// console.log(jsUser.greeting);


// object singalton   or    consturcter

// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "umer",
            lastname: "shehzad",
        }
    }
}


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

const obj3 = {...obj1, ...obj2, ...obj4}

// console.log(obj3);


// objects D sturtrucing...........

const course = {
    coursename: "js script",
    courseInstructor: "Umer",
    price: "999",
}

const {courseInstructor} =course
console.log(course.coursename);           /// node objects.js




