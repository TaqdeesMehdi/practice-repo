function arraymanipulate(array, instruction) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(instruction(array[i]));
  }
  return output;
}
const divideby2 = (output) => {
  return output > 2;
};
console.log(arraymanipulate([1, 2, 3, 4], divideby2));

function counter() {
  let count = 0;
  function increment() {
    count++;

    console.log(count);
  }
  return increment;
}
const mycounter = counter();
mycounter();
mycounter();
mycounter();
const mycounter2 = counter();
mycounter2();
mycounter2();
mycounter2();
