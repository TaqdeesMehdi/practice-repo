// function arraymanipulate(array, instruction) {
//   const output = [];
//   for (let i = 0; i < array.length; i++) {
//     output.push(instruction(array[i]));
//   }
//   return output;
// }
// const divideby2 = (output) => {
//   return output > 2;
// };
// console.log(arraymanipulate([1, 2, 3, 4], divideby2));

// function counter() {
//   let count = 0;
//   function increment() {
//     count++;

//     console.log(count);
//   }
//   return increment;
// }
// const mycounter = counter();
// mycounter();
// mycounter();
// mycounter();
// const mycounter2 = counter();
// mycounter2();
// mycounter2();
// mycounter2();
// function f1(num) {
//   let call = 0;
//   function f2() {
//     call++;
//     console.log(call);
//     return num * 2;
//   }
//   return f2;
// }
// const gen = f1(2);
//  const result = gen(2);

// const result2 = gen(3);

// console.log(gen);
// console.log(gen(2));
// console.log(result);
// console.log(result);
// function outer() {
//   let counter = 0;
//   function increment(f1) {
//     counter++;
//     console.log(Math.trunc(f1));
// if (counter > 1) {
//   return undefined;
// } else {
//     console.log(counter);
// }
//   }
//   return increment;
// }
// const func = outer();
// func();
// func();
// func();
// const anotherfunc = outer();
// const result = anotherfunc(888.23232);
// f1();
// console.log(a);
// var a = "hello world";
// function f1() {
//   console.log("human");
// }
// undefined is like a placeholder for a value that is not yet defined
// it is a value of the variable that is not yet initialized
// program for triangular star pattern
// for (i = 0; i <= 5; i++) {
//   for (j = 0; j <= i; j++) {
//     console.log(" ".repeat(5 - i));
//     console.log("*".repeat(i));
//   }
// }
// function display(data) {
//   console.log(data);
// console.log(err);
// }
// function hello() {
//   console.log("hello");
// }
// function block() {
//   let output = [];
//   for (let i = 0; i <= 90; i++) {
//     output.push("human");
//   }
// console.log(output);
// }
// setTimeout(() => console.log("hello"), 0);
// const result = fetch("https://dog.ceo/api/breeds/image/random").then(display);
// block();
// console.log("first");
// function outer(x) {
//   function inner(y) {
//     return x + y;
//   }
//   return inner(20);
// }
// const main = outer(10);
// console.log(main);
// const main = outer(10);
// console.log(main(20));

// const closure = function (arr) {
//   let counter = 0;
//   let human = true;
//   function inner(innerarr) {
//     human = false;
//     console.log(human);
//     let newarr = [];
//     newarr.push(arr);
//     newarr.push(innerarr);
//     counter++;
//     if (counter > 1) {
//       return undefined;
//     } else {
//       return newarr;
//     }
//   }
//   return inner;
// };
// const result = closure([1, 2, 3, 4]);
// const result2 = closure([1, 2, 3, 4]);

// console.log(result([5, 6, 7, 8]));
// console.log(result([5, 6, 7, 8]));
// console.log(result([5, 6, 7, 8]));
// function objreturn() {
//   let id = 1;
//   let name = "kabootar";
//   let counter = 0;
//   function inner(obj1) {
//     counter++;

//     if (counter > 10) {
//       return undefined;
//     } else {
//       return { 1: (obj1.id = id), 2: (obj1.name = name) };
//     }
//   }
//   return inner;
// }
// const result = objreturn();
// for (let i = 0; i <= 17; i++) {
//   const run = result({});
//   console.log(run);
// }
// let array = ["a", "b", "c", "d", "e"];
// // const name = true;
// // if (name === true) {
// //   console.log(array.splice(-1));
// // } else {
// //   console.log(array.slice(1, -2));
// // }
// //.reverse() and .splice mutate the original array
// array.splice(-1);
// console.log(array);
// console.log("array");
// function squareOfZeroes(matrix) {
//   const infoMatrix = preComputeNumOfZeroes(matrix);
//   const lastIdx = matrix.length - 1;
//   return hasSquareOfZeroes(infoMatrix, 0, 0, lastIdx, lastIdx, {});
// }
// // r1 is the top row, c1 is the left column
// // r2 is the bottom row, c2 is the right column
// function hasSquareOfZeroes(infoMatrix, r1, c1, r2, c2, cache) {
//   if (r1 >= r2 || c1 >= c2) return false;
//   const key =
//     r1.toString() +
//     "-" +
//     c1.toString() +
//     "-" +
//     r2.toString() +
//     "-" +
//     c2.toString();
//   if (key in cache) return cache[key];
//   cache[key] =
//     isSquareOfZeroes(infoMatrix, r1, c1, r2, c2) ||
//     hasSquareOfZeroes(infoMatrix, r1 + 1, c1 + 1, r2 - 1, c2 - 1, cache) ||
//     hasSquareOfZeroes(infoMatrix, r1, c1 + 1, r2 - 1, c2, cache) ||
//     hasSquareOfZeroes(infoMatrix, r1 + 1, c1, r2, c2 - 1, cache) ||
//     hasSquareOfZeroes(infoMatrix, r1 + 1, c1 + 1, r2, c2, cache) ||
//     hasSquareOfZeroes(infoMatrix, r1, c1, r2 - 1, c2 - 1, cache);
//   return cache[key];
// }
// // r1 is the top row, c1 is the left column
// // r2 is the bottom row, c2 is the right column
// function isSquareOfZeroes(infoMatrix, r1, c1, r2, c2) {
//   const squareLength = c2 - c1 + 1;
//   const hasTopBorder = infoMatrix[r1][c1].numZeroesRight >= squareLength;
//   const hasLeftBorder = infoMatrix[r1][c1].numZeroesBelow >= squareLength;
//   const hasBottomBorder = infoMatrix[r2][c1].numZeroesRight >= squareLength;
//   const hasRightBorder = infoMatrix[r1][c2].numZeroesBelow >= squareLength;
//   return hasTopBorder && hasLeftBorder && hasBottomBorder && hasRightBorder;
// }
// function preComputeNumOfZeroes(matrix) {
//   const infoMatrix = matrix.map((row) =>
//     row.map((value) => {
//       const numZeroes = value === 0 ? 1 : 0;
//       return { numZeroesBelow: numZeroes, numZeroesRight: numZeroes };
//     })
//   );
//   const lastIdx = matrix.length - 1;
//   for (let row = lastIdx; row >= 0; row--) {
//     for (let col = lastIdx; col >= 0; col--) {
//       if (matrix[row][col] === 1) continue;
//       if (row < lastIdx) {
//         infoMatrix[row][col].numZeroesBelow +=
//           infoMatrix[row + 1][col].numZeroesBelow;
//       }
//       if (col < lastIdx) {
//         infoMatrix[row][col].numZeroesRight +=
//           infoMatrix[row][col + 1].numZeroesRight;
//       }
//     }
//   }
//   return infoMatrix;
// }
// // exports.squareOfZeroes = squareOfZeroes;
// squareOfZeroes([1, 2, 3]);
// let post = undefined;
// function datatoview() {
//   jsinput.value = post == undefined ? "what's up nigga" : post;
//   jsdiv.textContent = post;
// }
// function handleinput() {
//   post = jsinput.value;
//   // datatoview();
// }
// function clickhandle() {
//   post = "";
//   // datatoview();
// }
// jsinput.oninput = handleinput;
// jsinput.onclick = clickhandle;
// setInterval(datatoview, 15);
// const arr = [2, 3, 1, 4];
// console.log(arr.toString());
// function num() {
//   let counter = 0;
//   function num3() {
//     counter++;
//     console.log(counter);
//   }
//   return num3;
// }
// const result = num;
// // setInterval(result(), 15);
// result();
// result();
// let post = "";
// let jsdiv;
// let jsinput;
// function loaddata() {
//   jsinput = document.createElement("input");
//   jsdiv = document.createElement("div");
//   jsinput.value = post;
//   jsdiv.textContent = post;
//   jsinput.oninput = handleinput;
//   document.body.replaceChildren(jsinput, jsdiv);
// }
// function handleinput() {
//   post = jsinput.value;
// }
// loaddata();
// // const arr = [1, 2, 3];
// // const newarr = arr.map((arr) => arr * 2);
// // console.log(newarr);
// // console.log(Array.prototype);
// const filter = (array, callback) => {
//   const output = [];
//   for (let i = 0; i < array.length; i++) {
//     if (callback(array[i]) == true) {
//       output.push(array[i]);
//     }
//   }
//   return output;
// };
// console.log(filter([1, 2, 3, 4], (num) => num < 2));
// const fnarray = [(x) => x * 2, (x) => x - 3];
// console.log(fnarray.reduce((input, fn) => fn(input), 20));
// const outer = () => {
//   let counter1 = 0;
//   // let counter2 = 0;
//   const inner1 = () => {
//     counter1++;
//     return counter1;
//     // const inner2 = () => {
//     //   counter2++;
//     // };
//     // return inner2;
//   };
//   return inner1;
// };
// const result = outer();
// console.log(result());
// console.log(result());
//-------------------------------------------------
//ALGO 1 NON-CONTRUCTIBLE ARRAY
//[1,1,2,3,5,7,22]
function nonconstruct(array) {
  let newarr = array.sort((a, b) => a - b);
  let change = 0;
  for (let i = 0; i < newarr.length; i++) {
    if (newarr[i] > change + 1) {
      return change + 1;
    }
    change = change + newarr[i];
  }
  return change + 1;
}
console.log(nonconstruct([5, 7, 1, 1, 2, 3, 22]));
//--------------------------------------------------

//ALGO NO 2 SQUARED SORTED ARRAY

function squaredsorted(array) {
  let newarr = new Array(array.length).fill(0);
}
