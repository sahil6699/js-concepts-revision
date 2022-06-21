//operators in  js
// arithmetic
//  assignment
//  comparison
//  logical
//  bitwise

//airthmetic
/*
let x = 10;
let y = 3;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);

//Increment(++)
console.log(++x);
console.log(x);

//Decrement(--)
console.log(--x);

*/
//assignemennt opr

/*
let x = 10;

x++;
x = x + 1;

x = x + 5;
x += 5;

x = x * 3;
x *= 3;
*/

/*
//comparison operators
let x = 1;
//relational
console.log(x > 0);
console.log(x >= 1);
console.log(x < 1);
console.log(x <= 1);

*/

/*
//strict equality opr
//check for (Type + Value)
console.log(x === 1);
 console.log(x !== 1);

console.log(1 === 1);
console.log("1" === 1);

//Lose Equality opr (Value)
//if the values type is not same then it converts and makes them same
console.log(1 == 1);
//here it will convert the value on the right side to string
console.log("1" == 1);
console.log(true == 1);
*/
/*
//ternary operators
//If  a customer has more than 100 points
// they are a gold customer
// they are a silver customer

let points = 140;
let dec = points > 100 ? "win" : "lose";
console.log(dec);
*/

//logical operators
//logical AND (&&)
// Returns TRUE if both operand are TRUE
//logical OR(||)
//Returns TRUE if only one operand is TRUE
//NOT (!)
// Reverses the value
/*
let highIncome = false;
let goodCreditScore = false;
let eligibleForLoan = highIncome || goodCreditScore;
let applicationRefused = !eligibleForLoan;
console.log(eligibleForLoan);
console.log(applicationRefused);
*/

//FALSY (false)
//undefined
//null
//0
//false
//''
//NaN

/*
//Anything that is not Falsy->Truthy
console.log(false || true);
console.log(false || 1);
console.log(false || "mosh");
//short-circuiting
//as soon as it finds a truty values it will return it this is known as short circuting
console.log(false || 1 || 2);

let userColor = undefined;
let defaultColor = "blue";
let currentColor = userColor || defaultColor;

console.log(currentColor);
*/

//Bitwise operator
// 1 = 00000001
// 2 = 00000010

console.log(1 | 2); //Bitwise OR
console.log(1 & 2); //Bitwise AND

//Read, Write, Execute
// 00000100
// 00000110
// 00000111

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;

let message = myPermission & readPermission ? "yes" : "no";
console.log(message);
