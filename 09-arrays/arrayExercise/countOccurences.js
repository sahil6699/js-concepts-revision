const numbers = [1, 2, 3, 1, 4];

const count = countOccurrence(numbers, -1);

function countOccurrence(array, searchElement) {
  return array.reduce((accumulator, current) => {
    const occurrence = current === searchElement ? 1 : 0;
    console.log(accumulator, current, searchElement);
    return accumulator + occurrence;
  }, 0);
}

console.log(count);

// function countOccurrences(array, searchElement) {
//   let count = 0;
//   for (let value of array) if (value === searchElement) count += 1;

//   return count;
// }
