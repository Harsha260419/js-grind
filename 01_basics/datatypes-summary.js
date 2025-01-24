// datatypes are divided into two categories: primitive and non-primitive
// this is based on how they are stored in memory and how they are accessed

// Primitive 
// 7 types: Number, BigInt, String, Boolean, null, undefined, Symbol
/*
Boolean: Represents a logical entity and can have two values: true or false.
Null: A special keyword denoting a null value, representing the intentional absence of any object value.
Undefined: A top-level property whose value is not defined; it indicates that a variable has been declared but has not yet been assigned a value.
Number: Represents both integer and floating-point numbers (e.g., 42, 3.14).
BigInt: An arbitrary-precision integer type that can represent integers larger than 
((2^53) - 1)  (e.g., 9007199254740992n).
String: A sequence of characters used to represent text (e.g., "Hello").
Symbol: A unique and immutable data type primarily used as object property keys.
*/

const score = 100
const scoreValue = 100.3

const isLoggedIn = true
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)

const bigNumber = 34525432325432564n // n is used to represent BigInt


// Non-Primitive (Reference), because they are stored as references in memory and accessed by reference not by value
// array, object, function
// Object: A collection of key-value pairs, where each key is a string (or a Symbol) and each value is any data type.
// Array: A list of elements, where each element can be of any data type.
// Function: A JavaScript procedure—a set of statements that performs a task or calculates a value.

const heroes = ['superman', 'batman', 'spiderman']
const user = {
    name: 'harsha',
    age: 23
}

const greet = function(){
    console.log('hello')
}

console.log(typeof outsideTemp) // prints object, it's a bug in JS
console.log(typeof greet) // actually it's object function, but it prints function

// ------------------------------------------------------------------------------------------------------

// stack and heap
// stack for primitive data types, and copy of the value is stored in stack
// heap for non-primitive data types, and reference to the value is stored in stack

let myAlias = "Sai"
let myName = myAlias
myAlias = "Harsha"

console.log(myName, myAlias)

let userOne = {
    name: "Harsha",
    age: 23
}
let userTwo = userOne

userTwo.name = "Sai"

console.log(userOne.name)
console.log(userTwo.name)