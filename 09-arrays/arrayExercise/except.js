const numbers = [1, 2, 3, 1, 1, 4, 1];
const output = except(numbers, [1, 2]);

console.log(output);

function except(array, excluded) {
  const arr = [];
  for (let element of array) if (!excluded.includes(element)) arr.push(element);
  return arr;
}
