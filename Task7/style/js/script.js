// print in browser
let str = "Hawraa";


document.getElementById("demo").innerHTML = str[0].toLowerCase();
document.getElementById("slice").innerHTML = str.substring(0, 1).toLowerCase();
document.getElementById("charAt").innerHTML = str.charAt(0).toLowerCase();
document.getElementById("substring").innerHTML = str.substring(0, 1).toLowerCase();
document.getElementById("substr").innerHTML = str.substr(0, 1).toLowerCase();
document.getElementById("split").innerHTML = str.split("", 1).toString().toLowerCase();
document.getElementById("match").innerHTML = str.match(/./)[0].toLowerCase();




//print in console
st = str[0].toLowerCase();
console.log(st.slice(0, 1));
console.log(st.charAt(0));
console.log(st.substring(0, 1));
console.log(st.substr(0, 1));
console.log(st[0]);
console.log(st.split("", 1).toString());
console.log(st.match(/./)[0]);