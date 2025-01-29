const arr = [0,1,2,3,4,5]
const heroes = ['superman', 'batman', 'spiderman']

const arr2 = new Array(1,2,3,4,5)
console.log(arr2[0]);

// chai said that when you declare an array then you have a prototype of array and then inside that you have another prototype and after that there is nothing, he gonna explain it further but told to remember this shit.

// array methods

arr2.push(6)
console.log(arr2)
arr2.pop()

arr2.unshift(9)
console.log(arr2)
arr2.shift()
console.log(arr2);

console.log(arr2.includes(9));
console.log(arr2.indexOf(9));

const newArr = arr2.join()

console.log(newArr);
console.log(typeof newArr);


// slice, splice

// what is the difference between slice and splice?

// generally people gonna tell that the last parameter is included in splice and not in slice but that ain't right, the difference is splice directly changes the arr2 in this case and slice just assigns copied version of manipulated arr2 to myn2

console.log("A "+ arr2);
const myn1 = arr2.slice(1,3)
console.log(myn1);
console.log("B "+arr2);

const myn2 = arr2.splice(1,3)
console.log("C "+ arr2);
console.log(myn2);






