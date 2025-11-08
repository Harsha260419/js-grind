let score = 33 // here you know that score is a number

// for example if you take score from front end request body you have no idea about the type of score
// you can convert it to number using Number() function

console.log(typeof score) // prints number
score = "33"
console.log(typeof score) // prints string
let valueInNumber = Number(score)
console.log(typeof valueInNumber) // prints number

let marks = "33abc" // this is not a number
let marksInNumber = Number(marks)
console.log(marksInNumber) // prints NaN, Not a Number, so that's why don't rely on numbers, but this is not a bug in JS,
//  but the type of NaN is number

console.log(typeof NaN)

score = null
console.log(Number(score)) // prints 0, because null is a representation of empty value, 
// now if you're using this for temperature then it's a bug, so be careful
score = true
console.log(Number(score)) // prints 1, because true is a boolean value and it's converted to 1
score = false
console.log(Number(score)) // prints 0, because false is a boolean value and it's converted to 0
score = undefined
console.log(Number(score)) // prints NaN, because undefined is not a number
score = "harsha"
console.log(Number(score)) // prints NaN, because harsha is not a number

let isLoggedIn = 1
let BooleanIsLoggedIn = Boolean(isLoggedIn)
console.log(BooleanIsLoggedIn) // prints true, because 1 is a truthy value

// 1 => true; 0 => false
// "harsha" => true; "" => false

let someNumber = 34
let stringNumber = String(someNumber)
console.log(stringNumber, typeof stringNumber) // prints 34 string

// **************************************************Operations**************************************************

let value = 3
let negValue = -value
console.log(negValue) // prints -3
/*
console.log(3 + 3) // prints 6
console.log(3 - 3) // prints 0
console.log(3 * 3) // prints 9
console.log(3 / 3) // prints 1
console.log(3 % 3) // prints 0
*/
let str1 = "hello"
let str2 = "harsha"
console.log(str1 + " " + str2) // prints hello harsha

console.log("1" + 2) // prints "12" because "1" is a string, so 2 is concatenated as a string
console.log(1 + "2") // prints "12" because 1 is a number, but "2" is a string, so 1 is concatenated as a string
console.log("1" + 2 + 3) // prints "123" because "1" is a string, so 2 and 3 are concatenated as strings
console.log(1 + 2 + "3") // prints "33" because 1 and 2 are numbers, so they are added to get 3, which is then concatenated as a string with "3"

console.log(true)
console.log(+true) // prints 1, because true is converted to 1
console.log(false)
console.log(+"") // When applied to an empty string, it attempts to parse the string as a numeric value. Since the empty string does not represent any numeric value, it is converted to 0.

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);