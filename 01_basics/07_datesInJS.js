let myDate = new Date()

console.log(myDate)
console.log(myDate.toDateString()) // output: Wed Jan 23 2023
console.log(myDate.toISOString()) // output: 2023-01-23T06:30:00.000Z
console.log(myDate.toJSON()) // output: 2023-01-23T06:30:00.000Z
console.log(myDate.toLocaleDateString()) // output: 1/23/2023
console.log(myDate.toLocaleString()) // output: 1/23/2023, 12:00:00 AM
console.log(myDate.toLocaleTimeString()) // output: 12:00:00 AM

console.log(typeof myDate)

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("12-28-2025")
// console.log(myCreatedDate.toLocaleString())

// time stamps

let myTimeStamp = Date.now()
console.log(myTimeStamp) // output: 1642912200000, this is the number of milliseconds since 1970
console.log(myCreatedDate.getTime()) // you compare this with above output to see the difference in milliseconds between the two dates


let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth()+1) // output: 0-11, because months are 0 based
console.log(newDate.getDate()) // output: 1-31
console.log(newDate.getFullYear())
console.log(newDate.getDay()) // output: 0-6, 0 is Sunday

newDate.toLocaleString('default',{
    weekday: 'long',
    }
)

// 18. how to get the difference between two dates in JS?
// answer
// let myCreatedDate = new Date("12-28-2025")
// let myTimeStamp = Date.now()
// console.log(myCreatedDate.getTime() - myTimeStamp)

// 19. how to get the difference between two dates in JS in days?
// answer
// let myCreatedDate = new Date("12-28-2025")
// let myTimeStamp = Date.now()
// console.log((myCreatedDate.getTime() - myTimeStamp)/(1000*60*60*24))

// 20. how to get the difference between two dates in JS in hours?
// answer
// let myCreatedDate = new Date("12-28-2025")
// let myTimeStamp = Date.now()
// console.log((myCreatedDate.getTime() - myTimeStamp)/(1000*60*60))

// 21. how to get the difference between two dates in JS in minutes?
// answer
// let myCreatedDate = new Date("12-28-2025")
// let myTimeStamp = Date.now()
// console.log((myCreatedDate.getTime() - myTimeStamp)/(1000*60))

// 22. how to get the difference between two dates in JS in seconds?
// answer
// let myCreatedDate = new Date("12-28-2025")
// let myTimeStamp = Date.now()
// console.log((myCreatedDate.getTime() - myTimeStamp)/(1000))


// 24. how to get the difference between two dates in JS in years?
// answer
// let myCreatedDate = new Date("12-28-2025")
// let myTimeStamp = Date.now()
// console.log((myCreatedDate.getTime() - myTimeStamp)/(1000*60*60*24*365))

// 25. how to get the difference between two dates in JS in months?
// answer
// let myCreatedDate = new Date("12-28-2025")
// let myTimeStamp = Date.now()
// console.log((myCreatedDate.getTime() - myTimeStamp)/(1000*60*60*24*30))

// 26. how to get the difference between two dates in JS in weeks?
// answer
// let myCreatedDate = new Date("12-28-2025")
// let myTimeStamp = Date.now()
// console.log((myCreatedDate.getTime() - myTimeStamp)/(1000*60*60*24*7))

