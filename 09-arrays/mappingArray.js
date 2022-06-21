const numbers = [1, -1, 2, 3];

// const filtered = numbers.filter((n) => n >= 0);

// const items = filtered.map(function (value) {
//   return "<li>" + value + "</li>";
// });

// const html = "<u>" + items.join("") + "</ul>";
// console.log(html);
// const items = filtered.map((n) => ({ value: n }));

//chaining the map and filter methods
const items = numbers
  .filter((n) => n >= 0)
  .map((n) => ({ value: n }))
  .filter((obj) => obj.value > 1)
  .map((obj) => obj.value);

console.log(items);
