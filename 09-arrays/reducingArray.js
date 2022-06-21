const numbers = [1, -1, 2, 3, 8];

// let sum = 0;
// for (let n of numbers) {
//   sum += n;
// }
// console.log(sum);

//reduce method reduces all the elements of an array to a single output
const sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
});
console.log(sum);
