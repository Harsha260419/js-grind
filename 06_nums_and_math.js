const score = 400

const balance = new Number(1000)
console.log(balance)

console.log(balance.toString().length)
console.log(balance.toFixed(2))

const otherNumber = 23.87
console.log(otherNumber.toPrecision(3))

const hundreds = 10000000000
console.log(hundreds.toLocaleString('en-IN'))
console.log(hundreds.toExponential())

// *************MATH****************

console.log(Math)
console.log(Math.abs(-4))
console.log(Math.ceil(4.1))
console.log(Math.floor(4.9))
console.log(Math.round(4.5))

// important one

console.log(Math.random())
console.log(Math.random()*10)
console.log(Math.floor(Math.random()*10)+1) // added 1 to get 1-10

const min = 10
const max = 20

// trick to get random number between min and max
console.log(Math.floor(Math.random()*(max-min+1))+min)

