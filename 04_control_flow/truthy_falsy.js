// falsy values
// false, 0, '', null, undefined, NaN, -0, BigInt 0n

// truthy values
// true, 1, ' ', [], {}, function(){}, -1, BigInt -1n

const userEmail = "harsha@gmail"

if(userEmail.length === 0) console.log('No email provided');

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log('No key-value pairs');
}

// nullish coalescing operator ??
// it is used to provide a default value for a variable that is null or undefined.
// it is used when we get a reply from database and we want to check if the value is null or undefined and provide a default value if it is.

let val1;
val1 = 5 ?? 10
console.log(val1) // prints 5
val1 = null ?? 10
console.log(val1) // prints 10
val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
console.log(val1);

// ternary operator

let temperature = 34

temperature <= 40 ? console.log("not hot") : console.log("hot");

