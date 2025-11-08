const myObj = {
    js: 'javascript',
    cpp: 'c++',
    py: 'python'
}

for (const key in myObj) {
    console.log(`${key}: ${myObj[key]}`);
}

const programming = ['python', 'java', 'cpp']

for (const key in programming){
    console.log(programming[key]);
    console.log(key); // arrays have keys and they are 0,1,2....
    
}