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
f1();
console.log(a);
var a = "hello world";
function f1() {
  console.log("human");
}
