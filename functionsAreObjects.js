function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

//this is how internall the functions are created

const Circle1 = new Function(
  "radius",
  `
this.radius = radius;
this.draw = function() {
    console.log("draw");
}
`
);

// const another = new Circle(1);
//
// console.log(Circle.name);
// console.log(Circle.length);
// console.log(Circle.constructor);
