"use strict"; // treat all JS code as newer version

// alert(3+3) // we are using nodeJS not browser, so this will not work

console.log(3 
    + 
    3); // this will work but no readability here so not recommended

console.log("harsha");

// Data Types

// 1. Number => range is 2 ^ 53 - 1
// BigInt => range is 2 ^ 53 + 1

// 2. String => "harsha" or 'harsha', double quotes recommended
// Boolean => true or false
// null => it's a datatype and also a standalone value, it's a representation of empty value
// undefined => you declare a variable but not assigned any value
// symbol => unique and immutable value, used as object property keys

// above ones are primitive data types

// 3. Object => key-value pairs, collection of data

console.log(typeof null); // prints object, it's a bug in JS
console.log(typeof undefined); // prints undefined

