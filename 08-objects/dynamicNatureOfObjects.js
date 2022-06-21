const circle = {
  radius: 1,
};

circle.color = "yellow";
circle.draw = function () {};
circle.move = function () {};
delete circle.color;
delete circle.move;
delete circle.draw;

console.log(circle);

let x = {}; //this is object literal syntax
// it will get converted to this by js engine
// let x = new Object();
new String();
new Boolean();
new Number();
/* 
every object has a constructor 
property and it refrences to the
function that was used to create that object

in case of factory functions we get 
// [Function: Object]
because the inbuilt object function is used to create the object which wa in iteral form

//in case of constructor we return the function which was being used as the constructor
*/
