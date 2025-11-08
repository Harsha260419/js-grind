let myArr = [1,2,3,4,5];

// for(const element of myArr){
//     element = element * 2;
// }

// console.log(myArr); // this will throw an error because we are trying to change the value of a constant variable

for(let element of myArr){
    element = element * 2;
}

console.log(myArr) // this will print [1,2,3,4,5] because we are not changing the value of the array elements

for(const element in myArr){
    console.log(element);
    
}

const greetings = "hello harsha"

for(const letter of greetings){
    console.log(letter);
}


const map = new Map();
map.set("IN", "India");
map.set("US", "United States of America");
map.set("RS", "Russia");

for (const [key,value] of map) {
    console.log(key, " ",value);
}
for (const key of map) {
    console.log(key);
}