let array = [1,2,3,4,5]

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(array[index])   
}

for(let index = 1; index<=10; index++){
    for(let j = 1; j<=10; j++){
        console.log(`${index} * ${j} = ${index*j}`)
    }
    console.log();
}

// break and continue

for(let i=0; i<10; i++){
    if(i==5) {
        console.log("detected 5");
        break
    }
    console.log(i)
}

for(let i=0; i<10; i++){
    if(i==5){
        console.log("skipping 5");
        continue;
    }
    console.log(i);
}