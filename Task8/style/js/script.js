// print in browser
// document.getElementById("demo").innerHTML = Math.floor(Math.random() * 4);
// print in console
// console.log(Math.floor(Math.random() * 4));


const min = 0;
const max = 4;
const intNumber = Math.floor(Math.random() * (max - min)) + min;
// print in console
console.log(intNumber); //> 0,1, 2, 3

// print in browser
document.getElementById("demo").innerHTML = Math.floor(Math.random() * (max - min)) + min;