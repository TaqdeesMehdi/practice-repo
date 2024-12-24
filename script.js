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
//     // if (counter > 1) {
//     //   return undefined;
//     // } else {
//     console.log(counter);
//     // }
//   }
//   return increment;
// }
// // const func = outer();
// // func();
// // func();
// // func();
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
//   // console.log(err);
// }
// // function hello() {
// //   console.log("hello");
// // }
// function block() {
//   let output = [];
//   for (let i = 0; i <= 90; i++) {
//     output.push("human");
//   }
//   // console.log(output);
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
// // const main = outer(10);
// // console.log(main(20));

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
// // const result2 = closure([1, 2, 3, 4]);

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
