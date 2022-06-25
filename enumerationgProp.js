function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(10);

//we can iterate over or enumerate over the prop of an object
// we can do this using the for in loop
for (let key in circle) {
  //this will print all the keys of the object circle
  //we can use the bracket notation for printing the values
  //   console.log(key, circle[key]);

  //what if we only want to get the properties not the methods?
  // then we'll use the typeof operator to check the values
  if (typeof circle[key] !== "function") console.log(key, circle[key]);
}

// other approach to get all the keys in an object
//this will return keys as an array
//with this approach we can't seprate properties from method
const keys = Object.keys(circle);
console.log(keys);

//this checks if a certain property is present in an object or not
if ("radius" in circle) {
  console.log("circles has radiu`ss");
}
