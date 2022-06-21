showPrimes(100);

//Prime (whose factors are only 1 and itself)
// 11 - 1, 11
//13 - 1, 13
//Composite - more than 2 factors
//12 - 1, 2, 3, 4, 6 , 12

// console.log(checkPrime(5));
function showPrimes(limit) {
  for (let i = 2; i <= limit; i++) {
    if (checkPrime(i)) console.log(i);
  }
}

function checkPrime(no) {
  let isPrime = true;
  for (let i = 2; i <= no - 1; i++) {
    if (no % i == 0) {
      isPrime = false;
      return isPrime;
      //   return false;
    }
  }
  return isPrime;
  //   return true;
}
