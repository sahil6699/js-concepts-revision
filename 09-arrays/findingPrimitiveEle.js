//finding elements

const numbers = [1, 2, 3, 1, 4];
//indexOf -> returns index from start, returns -1 if doesn't exist
console.log(numbers.indexOf(1, 2));
//lastIndexOf -> return index from last, return -1 if doesn't exist
console.log(numbers.lastIndexOf(1));

console.log(numbers.indexOf(1) != -1);
console.log(numbers.includes(4));
