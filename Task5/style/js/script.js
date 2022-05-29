//print in browser
var x = 100000;
document.getElementById("numbertoString").innerHTML =
    x.toString();

document.getElementById("numbertoExponential").innerHTML =
    x.toExponential();

document.getElementById("numbertoFixed").innerHTML =
    x.toFixed(0);

document.getElementById("numbertoPrecision").innerHTML =
    x.toPrecision();

document.getElementById("valueOf").innerHTML =
    x.valueOf();

document.getElementById("numberparseInt").innerHTML =
    parseInt("100000");

document.getElementById("numberparseFloat").innerHTML =
    parseFloat("100000");


document.getElementById("number").innerHTML =
    Number("100000") + "<br>" +
    Number("  100000") + "<br>" +
    Number("100000  ") + "<br>"

document.getElementById("toLocaleString").innerHTML =
    x.toLocaleString();

document.getElementById("eval").innerHTML =
    eval(x);

document.getElementById("pow").innerHTML =
    Math.pow(10, 5);

document.getElementById("round").innerHTML =
    Math.round(x);

document.getElementById("ceil").innerHTML =
    Math.ceil(x);

document.getElementById("floor").innerHTML =
    Math.floor(x);


// print in console
num = 100000;
console.log((num).toString());
// // console.log(100000..toString());
console.log((num).toExponential());
console.log((num).toFixed(2));
console.log(parseInt("100000 hello"));
console.log(parseFloat("100000 hello"));
console.log((num).toPrecision());
console.log((num).valueOf());
console.log(Math.round(num));
console.log(Math.ceil(num));
console.log(Math.floor(num));
console.log((num).toLocaleString());
console.log(eval(100000));
console.log(Math.pow(10, 5));