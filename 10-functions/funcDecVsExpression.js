walk();
//function declaration - function declaration are hoisted, which means the js move the function declarations to the top of the code automatically
function walk() {
  console.log("walk");
}

console.log(x);
let x = 1;
// run();
//annonymous function expression
let run = function () {
  console.log("run");
};

let move = run;
//named function expression
let runner = function walk() {
  console.log("naming run");
};

// move();
// runner();
