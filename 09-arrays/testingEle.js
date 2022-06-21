//every method

const number = [1, 2, 3, -1];

const allPositive = number.every(function (value) {
  return value >= 0;
});

console.log(allPositive);

//some method
//if at least one element satifies the condition
const num2 = [3, -1, -3, -4];
const onePositive = num2.some(function (value) {
  return value >= 0;
});
console.log(onePositive);
