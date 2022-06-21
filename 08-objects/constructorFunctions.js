//Constructor Functions
// we use Pascal notation in constructor function
//that is first letter of every word is capital
//OneTwoThreeFour
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

//all the function in js are objects

//this returns the name of the function
console.log(Circle.name);
//this returns the no of arguments of the functtion
console.log(Circle.length);

console.log(Circle.constructor);

const Circle1 = new Function(
  "radius",
  `this.radius = radius;
  this.draw = function () {
    console.log("draw");
  }`
);

const circle = new Circle1(1);
console.log(circle);
const another = new Circle(1);
console.log(another);
console.log(another.constructor);
//new operator creates a new js objects i.e const x = {};
//sets this to point to an empty object
//it will return the new object from this function i.e return this;

console.log(Circle.call({}, 1));
