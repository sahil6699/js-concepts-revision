function sum(discounts, ...prices) {
  //   console.log(args);
  const total = prices.reduce((a, b) => a + b);
  return total * (1 - discounts);
}

console.log(sum(0.1, 20, 30));
