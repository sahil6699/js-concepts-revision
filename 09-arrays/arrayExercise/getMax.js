// const numbers = [1, 2, -1000, 3, 4, -1383];
const numbers = [];

const max = getMax(numbers);

console.log(max);

function getMax(array) {
  //   let largest = Number.MIN_VALUE;

  //   for (let value of array) if (value > largest) largest = value;

  //   return largest;
  if (array.length === 0) return undefined;

  return array.reduce(function (accumulator, current) {
    if (current > accumulator) accumulator = current;

    return accumulator;
  }, Number.MIN_VALUE);
}
