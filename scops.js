let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("Inner:", a);

}
// console.log(a);

function One() {
    const username = "umer"

    function Two() {
        const website = "youtube"
        //console.log(username);
    }
    // console.log(website);

    Two()
}

// One()

if (true) {
    const username = "Umer"
    if (username === "Umer") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


// .......... interesting .......

addOne(4) // this condition always code runing 
function addOne(num) {
    return num +1
}

// addOne(4)


// addTwo(6),,.... this line condition code runing error because its variable function..
const addTwo = function(num) {
    return num + 2
}
// addTwo(6)...this line condition code runing code runing 