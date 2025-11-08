
function sayMyName(){
    console.log("H")
    console.log("E")
    console.log("I")
    console.log("S")
    console.log("E")
    console.log("N")
    console.log("B")
    console.log("E")
    console.log("R")
    console.log("G")

}

// sayMyName // this is reference
// sayMyName() // this is invocation
// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2)
// }

function addTwoNumbers(number1, number2){
    return number1+number2;
}
addTwoNumbers(1,8); // 9
addTwoNumbers(3,"4"); // 34
addTwoNumbers(3,null); // null is converted to 0 but we can't accept these as arguments we will check their data types before processing. gonna learn this in conditionals

function loginUserMessage(username = "harsha"){
    if(!username){
        console.log("Please provide a username")
        return;
    }
    return `Welcome ${username}`
}
console.log(loginUserMessage("Harsha"))
console.log(loginUserMessage()) // Welcome undefined because we are not passing any argument to the function

function calculateCartPrice(num1){
    return num1;
}

console.log(calculateCartPrice(100,200)) // prints 100 because we are only passing 1 argument and the other one is ignored.

// how to deal with situation when we don't know how many arguments we are going to pass to the function?
// we can use rest operator for this.
function calculateCartPrice(val1, val2, ...prices){
    console.log(prices)
}
calculateCartPrice(100,200,300,400,500) // prints [ 100, 200, 300, 400, 500 ]

const user = {
    username: "harsha",
    age: 21
}

function handleObject(anyObject){
    console.log(`Username: ${anyObject.username}, age: ${anyObject.age}`);
    // console.log(`Username: ${anyObject.username}, age: ${anyObject.ages}`); // this will print undefined because ages is not a property of anyObject
}

handleObject(user)

function returnSecondValue(myNewArray){
    return myNewArray[1];
}

let arr = [1,2,3,4,5,6,7,8,9,10];
console.log(returnSecondValue(arr));
let a = [1];
console.log(returnSecondValue(a));