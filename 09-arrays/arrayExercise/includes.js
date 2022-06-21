const numbers = [1, 2, 3, 4];

// console.log(numbers.includes(1));

// function includes(array, searchElement) {
//   const doExist = array.some((n) => n === searchElement);
//   return doExist;
// }

function includes(array, seaerchElement) {
  for (let value of array) if (value === seaerchElement) return true;
  return false;
}

console.log(includes(numbers, "sahil"));
