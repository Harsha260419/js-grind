console.log("2">1) // prints true
console.log("2"<1) // prints false
console.log("2">"12") // prints true, when using comparison operators like >, if both operands are strings, they are compared lexicographically (i.e., in dictionary order).

console.log(null>0) // 	Converts null to 0; evaluates as 0 > 0, which is false.
console.log(null==0) // null does not equal 0; null only loosely equals itself and undefined.
console.log(null>=0) // p	Converts null to 0; evaluates as 0 >= 0, which is true.

console.log(undefined>0) // undefined is converted to NaN, which is a falsy value.
console.log(undefined==0) // undefined does not equal 0; undefined only loosely equals itself and null.
console.log(undefined>=0) // undefined is converted to NaN, which is a falsy value.

// === is strict equality operator, it checks both value and type
// == is loose equality operator, it checks only value

console.log("1"===1)