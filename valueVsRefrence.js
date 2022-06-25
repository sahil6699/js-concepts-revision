//value
/* number 
String
Boolean
Symbol
undefined
null */

// let x = { value: 10 };
// let y = x;
// x.value = 20;

// console.log(x, y);
// //primitives are copied by value
// //refrence types are copied by refrence
let number = { value: 10 };
function increase(obj) {
  obj.value++;
}

increase(number);
console.log(number);
