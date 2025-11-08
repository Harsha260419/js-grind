const name = "harsha"
const repoCount = 5

// console.log(name + repoCount + " Value") // prints harsha5 Value, not recommended because of readability
console.log(`hello my name is ${name} and i have ${repoCount} repositories`) // recommended way of concatenation

const gameName = new String("cricket")

console.log(gameName)
console.log(gameName.__proto__) 
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(1))
console.log(gameName.indexOf("r"))

const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-5,4) //  If negative, it is treated as string.length + endIndex. If endIndex is omitted, slice extracts to the end of the string.
console.log(anotherString)

const newStringOne = "        harsha         "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://harsha.com/harsha%20sai"
console.log(url.replace("%20", "-" ))
console.log(url)
console.log(url.includes("elon"))

const splitString = "harsha sai is a full stack developer"
console.log(splitString.split(" "))
// gameName is an instance of the String object. The __proto__ property of gameName points to String.prototype, which is the prototype object for all string instances.

// You are logging the prototype of the gameName object. This prototype object contains all the methods and properties that are available to string instances, such as toUpperCase, length, charAt, etc.

const anyString = gameName.slice(-3,2)
console.log(anyString)