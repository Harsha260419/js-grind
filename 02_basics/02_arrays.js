const marvel_heros = ["thor","ironman","captain america","black widow","hulk"];
const dc_heros = ["batman","superman","wonder woman","flash","aquaman"];

// marvel_heros.push(dc_heros) // you'd expect that it would add all the elements of dc_heros to marvel_heros but it adds the whole array as an element in this instance it's ["thor","ironman","captain america","black widow","hulk",["batman","superman","wonder]

console.log(marvel_heros);

// A shallow copy of an array is a new array instance, but it only copies the references to nested objects or arrays, not the nested data itself. This means if the original array contains primitives (like numbers or strings), a shallow copy is completely independent.

const originalArray = [1, "two", { name: "Alice" }];
const dupArray = Array.from(originalArray);

dupArray[2].name = "Bob";
dupArray[0] = 99;
console.log(originalArray); // name changes to bob but first element remained the same.



// concat
const allHeros = marvel_heros.concat(dc_heros)
// push directly changes the array but concat doesn't change the array, it just returns the new array
console.log(allHeros);

// most people prefer spread operator over concat
const allHeros2 = [...marvel_heros, ...dc_heros]
console.log(allHeros2);

const an_array = [1,2,3,[4,5,6],7,[7,8]]
const flat_array = an_array.flat() // inside flat() you can pass the depth of the array you want to flatten

console.log(flat_array);

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh")) // it converts the string to an array of characters
console.log(Array.from([1,2,3], x => x * 2)) // it converts the array to an array of elements after applying the function to each element
const exp = Array.from({name: "harsha"}) // it converts the object to an array of elements, prints []
console.log(exp);

let score1 = 23
let score2 = 34
let score3 = 45

console.log(Array.of(score1, score2, score3)) // it converts the arguments to an array of elements;

