const numbers = [1, 2, 3, 4, 5];

for (let number of numbers) console.log(number);
console.log();

numbers.forEach((number, index) => console.log(index, number));
