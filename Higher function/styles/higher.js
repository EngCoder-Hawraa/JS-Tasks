// =============== طريقة اولى ===================
// const arr = [7, 2, 3, 4, 5, 7, 8, 12, -12, 43, 6, 0];
// const changeToNegativeOrPositive = (arr) => {
//    return arr.reduce((acc, val) => {
//       const number = val == 0 ? val : val * -1;
//       return acc.concat(number);
//    }, []);
// };
// console.log(changeToNegativeOrPositive(arr));


// =============== طريقة ثانية ===================

// let arr = [7, 2, 3, 4, 5, 7, 8, 12, -12, 43, 6, 0];
// let changeToNegativeOrPositive = arr.map(function(ele ,i , arr ){
//     const number = ele == 0 ? ele : ele * -1;
//     return number;
// });
// console.log(changeToNegativeOrPositive);


// =============== طريقة ثالثة===================

let arr = [7, 2, 3, 4, 5, 7, 8, 12, -12, 43, 6, 0];
let changeToNegativeOrPositive = arr.map((ele) => ele == 0 ? ele : ele * -1);

console.log(changeToNegativeOrPositive);
