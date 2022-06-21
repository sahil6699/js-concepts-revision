console.log(sum(10));
function sum(no) {
  let total = 0;

  for (let i = 1; i <= no; i++) {
    if (i % 3 === 0 || i % 5 === 0) total += i;
  }

  return total;
}
