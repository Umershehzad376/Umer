// const user {
    // username = "Umer",
    // price = 999,

    // welcomeMessage: function name() {
    //     console.log(`${this.username} , welcome to website`)
    // console.log(this);

// }

// user.welcomeMessage()
// user.username = "shehzad"
// user.welcomeMessage()

// console.log(this);

// const one = function name(params) {
//     let username = "umer"
//     console.log(this);
// }


const one = () => {
    let username = "umer"
    // console.log(this);
}
// one()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3, 4));


// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

// const addTwo = (num1, num2) => ({username: "umer"})

// console.log(addTwo(6, 4));

////              IIFE    ////////////////

(function two() {
    console.log(`DB CONNECTED`);
})();
 
((name) => {
    console.log(`DB SHEHZAD ${name}`);
})("hasasn");