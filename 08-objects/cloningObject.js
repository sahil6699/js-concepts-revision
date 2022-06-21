const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

//1 - using the for in loop
/*
const another = {};
for (let key in circle) another[key] = circle[key];
console.log(another);
*/

//2 - Object..assign(targetObj, oneOrMoreSourceObjects);
// Object.assign() copies the prop and  methods from 1 or more source objects into a target object and we can use it clone an object or combine one or more object
/*
const another = Object.assign({ color: "yellow" }, circle);
console.log(another);
*/

//3 -using the spread operator

/**
 * spread operator basically means to getting all the prop and methods an putting them into other objects
 */
const another = { ...circle };
console.log(another);
