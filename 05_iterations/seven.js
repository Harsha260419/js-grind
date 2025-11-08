const nums = [1,2,3,4,5,6,7,8];

const newNums = nums.map((element) => (element ** 2));
console.log(newNums);

function square(num){
    return num ** 2;
}

const arr = nums.map(square);
console.log(arr);

const newArr = nums.map((num) => num*10).map((num) => num+1).filter((num) => num>40);

console.log(newArr);
