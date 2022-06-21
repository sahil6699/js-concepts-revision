const numbers = [1, 2, 3, 4];
const output = move(numbers, 0, -3);

console.log(output);

// console.error("Invalid offset");
function move(array, index, offset) {
  const arr = [...array];
  if (index + offset >= arr.length || index + offset < 0) {
    console.error("invalid offset");
    return;
  }

  const element = arr.splice(index, 1)[0];
  arr.splice(index + offset, 0, element);

  return arr;
}
