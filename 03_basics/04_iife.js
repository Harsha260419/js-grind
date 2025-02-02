// Immediately Invoked Function Expression (IIFE)

(function foo() {
  console.log('foo');
})(); // always use semicolon after the function because it doesn't know where the function ends

// this will run the function immediately after the function is defined and it also helps in avoiding the global scope pollution

// now what is global scope pollution? and how does IIFE help in avoiding it?

// Global scope pollution is when you define a variable in the global scope and it is accessible from anywhere in the code. This can lead to a lot of problems like variable name conflicts, security issues, etc.

// IIFE helps in avoiding global scope pollution by wrapping the code inside a function and immediately invoking it. This way the variables defined inside the function are not accessible from outside the function.

// Example of global scope pollution:

// var x = 10;

// function foo() {
//     console.log(x);
// }

// foo(); // 10

// Example of IIFE:

(function () {
    var x = 10;
    console.log(x);
    })();

// console.log(x); // ReferenceError: x is not defined

// In the above example, the variable x is defined inside the IIFE and is not accessible from outside the IIFE.

((name) => {
    console.log(`hello ${name}`)
})("harsha")
// yo will give error because you didn't put semicolon for arrow function call above.
// (function yo(){
//     console.log('yo')
// })()