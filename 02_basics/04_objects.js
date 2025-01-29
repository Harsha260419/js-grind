// const tinderUser = new Object() // => singleton using constructor
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "harsha@mail.com",
    fullname: {
        userfullname: {
            firstname: "Harsha",
            lastname: "Sai",
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname)
// console.log(regularUser.fullname.userfullName?.firstname) // this will give undefined, this is optional chaining.
// console.log(regularUser.fullname.userfullName.firstname) // will report an error UNCAUGHT TypeError.

// optional chaining, more on that later. (it's like putting ? beside fullname then if it doesn't exists then it will just print undefined)

//  It provides a concise syntax for accessing properties deep within nested objects without encountering errors due to null or undefined values. This helps in writing cleaner and more readable code by reducing the need for explicit null checks and conditionals.

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}
// console.log(obj3) // prints { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } } entire object is pushed as element just like in array.

// const obj3 = Object.assign(obj1, obj2)
// console.log(obj3 === obj1) // prints true because everything is enumerated to obj1 from all other objects in this case obj2
// const obj3 = Object.assign({}, obj1, obj2) // chai prefers this syntax
// console.log(obj3 === obj1) // this prints false because everything is going to {} which is the target here.

const obj3 = {...obj1, ...obj2} // 90% you gonna use this syntax just like array.
console.log(obj3)

const users = [
    {
        id: 1,
        mail: "a@mail.com"
    },
    {
        id: 2,
        mail: "b@mail.com"
    },
    {
        id: 3,
        mail: "c@mail.com"
    }
]

console.log(users[1].mail)

console.log(Object.keys(tinderUser)) // returns an array of keys
console.log(Object.values(tinderUser)) // returns an array of values
console.log(Object.entries(tinderUser)) // returns an array of arrays of key value pairs
console.log(tinderUser.hasOwnProperty("id")) // returns true if the object has the property, else false

const course = {
    coursename: "JS",
    price: "999",
    teacher: "Harsha",
}

course.teacher

// const {teacher} = course // destructuring, it will create a variable teacher and assign the value of course.teacher to it. we do this because we don't want to use course.teacher everytime.

// const {price: rate} = course
// console.log(rate)

const {coursename, price, teacher: guru} = course
console.log(coursename)
console.log(guru);


// {
//     "name": "Harsha",
//     "age": 25,
//     "address": {
//         "city": "Hyderabad",
//         "state": "Telangana"
//     },
// }

// the above comment signifies a JSON response from an API where it almost resembles in structure to an object in JS. But the difference is that JSON is a string and object is an object. So we can convert JSON to object and vice versa.