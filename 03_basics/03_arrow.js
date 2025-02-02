const user = {
    username: "harsha",
    coursePrice: 888,

    welcomeMessage: function(){
        console.log(`Welcome ${this.username}`)
        console.log(this) // tell about current context which is the user object
    }
}

user.welcomeMessage()
user.username = "harsha sai"
user.welcomeMessage()
console.log(this) // tells about the global context which is the window object in the browser and global object in node.js which is{}

// function chai(){
//     const username = "harsha"
//     console.log(this); // this will print a lot of values
//     console.log(this.username); // undefined, because the function is not a method of an object
// }

// chai()

// const chai = function(){
//     const username = "harsha"
//     console.log(this); // this will print a lot of values
//     console.log(this.username); // undefined, because the function is not a method of an object
// }
// chai() // gonna give us the same result.

// const chai = () => {
//     let username = "harsha"
//     console.log(this) // prints {}
// }

// chai()


// const addTwo = (num1, num2) => {
//     return num1+num2;
// }
// console.log(addTwo(2,3))

// implicit return

const addTwo = (num1, num2) => (num1+num2); // when you use {} you have to use return keyword otherwise it will return undefined
// if you are using () you don't have to use return keyword

console.log(addTwo(2,3));

const objRetrieve = () => ({username: "harsha"})
console.log(objRetrieve())
