function Circle(radius) {
  let color = red;

  this.radius = radius;

  //due to block scope of let , defalut location will act as private property
  let defaultLocation = {
    x: 0,
    y: 0,
  };
  //   due to the use of let computeOptimumLocation will also be private
  let computeOptimumLocation = function (factor) {
    //...
  };
  this.draw = function () {
    computeOptimumLocation(0.1);
    // defaultLocation
    //this.radius
    console.log("draw");
  };
}

const circle = new Circle(10);
circle.computeOptimumLocation();
circle.draw();
