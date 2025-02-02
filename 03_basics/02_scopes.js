// let a = 10
// const b = 20
// var c = 30

// if(true){
//     let a = 100
//     const b = 200
//     var c = 300

// }


// console.log(a) // reference error 
// console.log(b) // reference error
// console.log(c) // 300 because var is available in the global scope

// the global scope you have in browser is different from the global scope you have in node.js


function one(){
    let username = "harsha"
function two(){
    const website = "youtube";
    console.log(username);
}
two()
}

one()

// child function can access the parent function variables but parent function cannot access the child function variables
// remember the logic a kid can snatch an ice cream from an adult but an adult cannot snatch an ice cream from a kid cuz it looks creepy.

if(true){
    let username = "harsha"

    if(username === "harsha"){
        const website = "youtube"
        console.log(`${username} works in ${website}`)
    }
    // console.log(website) // reference error
}
// console.log(username) // reference error

console.log(addOne(1)) // 2; won't throw an error because of hoisting more on it later


function addOne(num){
    return num+1
}

console.log(addTwo(2)) // will throw an error because of hoisting more on it later
const addTwo = function(num){
    return num+2;
}
