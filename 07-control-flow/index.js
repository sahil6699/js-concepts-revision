//Hour
//if hour is between 6am and 12pm: Good morning!
//if hour is between 12pm and 6pm: Good afternoon!
//Otherwise: Good evening!
/*
let hour = 10;
if (hour >= 6 && hour < 12) console.log("Good morning");
else if (hour >= 12 && hour < 18) console.log("Good afternoon");
else console.log("Good evening");
*/

/*
let role = "moderator";

switch (role) {
  case "guest":
    console.log("Guest User");
    break;
  case "moderator":
    console.log("Moderator User");
    break;
  default:
    console.log("Unknown User");
    break;
}

if (role === "guest") console.log("Guest User");
else if (role === "moderator") console.log("Moderator User");
else console.log("Unknown User");
*/

//for loop
/*
for (let i = 5; i >= 1; i--) {
  //   console.log("Hello World", i);
  if (i % 2 != 0) {
    console.log(i);
  }
}
*/

//while loop
/*
let i = 0;
while (i < 5) {
  if (i % 2 != 0) console.log(i);
  i++;
}
*/

//do  while loop
/*
let i = 9;
do {
  if (i % 2 != 0) console.log(i);
  i++;
} while (i <= 5);
*/

//for in loop-iterates over prop of object
//for in loop is mostly used to iterate over the objects
/*
const person = {
  name: "Mosh",
  age: 30,
  rollNo: 21,
  class: "Vth",
};

for (let key in person) {
  console.log(key, person[key]);
}

const colors = ["red", "green", "blue"];
for (let index in colors) {
  console.log(index, colors[index]);
}
*/

//for of loop- iterates over items of array
//for of loop is used to iterate over the elements in an array
//in for of loop we don't need to give the index like in for in loop
/*
const colors = ["red", "green", "blue", "yellow", "pink"];
for (let color of colors) {
  console.log(color);
}
*/

let i = 0;
while (i <= 10) {
  //   if (i === 5) break;
  if (i % 2 === 0) {
    i++;
    continue;
  }

  console.log(i);
  i++;
}
