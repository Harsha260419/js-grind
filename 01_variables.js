const accountId = 144553
let accountEmail = "harsha@email.com" // this is a local variable, recommended
var accountPassword = "12345" // this is a global variable, not recommended
accountCity = "Hyderabad" // this is a global variable, not recommended
let accountState;

// accountId = 2 "not allowed"
// console.log(accountId);

/*
prefer not to use var, use let instead
because of issue in block scope and functional scope
*/



accountEmail = "h@email.com"
accountPassword = "123456"
accountCity = "Bangalore"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

