// A FUNCTION INSIDE A OBJECT IS CALLED A METHOD
// circle.draw(); //METHOD
// let radius = 1;
// let x = 1;
// let y = 1;

//Factory Function
//if a our object have logic we use factory or constructor functions to create objects

//factory functions
//just like factory producing objects,factory functions produces objects
//camel notation is used in factory function
function createCircle(radius) {
  //Object-oriented programming(OOP)
  return {
    radius,
    draw() {
      console.log("draw");
    },
  };
}

const circle1 = createCircle(1);
console.log(circle1);
circle1.draw();

const circle2 = createCircle(2);
console.log(circle2);

console.log(circle1.constructor);
