const first = [1, 2, 3];
const second = [4, 5, 6];

//const combined-spread operator
//when you spread an array all its elements are returned indivisually
const combined = [...first, "a", ...second, "b"];
console.log(combined);
const copy = [...combined];
console.log(copy);
