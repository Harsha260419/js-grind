// objects declared as literals are not singletons and objects declared as constructors are singletons

// jab constructor se object bantha hai woh apne tarah kaa ek hee object hotaa hai par doosre tarah se objects banaayenge tho uske multiple instances ban jaate hai

// Object.create() => used to create object using constructor method, we'll see this later.

// now object literals

const mySym = Symbol("key1");

const JsUser = {
    name: "Harsha",
    "full name": "Harsha Sai",
    // mySym: "mykey", // this is not the right way to use symbol as a key
    [mySym]: "mykey", // this is the right way to use symbol as a key
    age: 20,
    location: "Hyderabad",
    email: "harsha@google.com",
    isLoggedIn: false,
    lastLogInDays: ["Monday", "Tuesday", "Wednesday"],
}

console.log(JsUser.email); // not recommended
console.log(JsUser["email"]); // recommended
console.log(JsUser["full name"]); // doing this with dot operator isn't possible

// Interview Question: use symbol as a key and print it.

console.log(typeof JsUser[mySym]); // prints string
console.log(JsUser[mySym]); // prints mykey

JsUser.email = "harsha@amazon.com"
// Object.freeze(JsUser) // this makes the object immutable, you can't add, delete or modify the properties of the object
JsUser.email = "harsha@microsoft.com"
console.log(JsUser);

JsUser.greetings = function(){
    console.log("Hello")
}
JsUser.greetingsTwo = function(){
    console.log(`Hello ${this.name} bro!`)
}

console.log(JsUser.greetings) // we get reference of function, it isn't executed
console.log(JsUser.greetings())
console.log(JsUser.greetingsTwo()); //prints hello harsha bro! and on next line undefined why undefined? more on that later.





