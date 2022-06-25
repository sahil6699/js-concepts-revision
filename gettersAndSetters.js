function Circle(radius) {
  //   let color = red;

  this.radius = radius;

  let defaultLocation = {
    x: 0,
    y: 0,
  };

  this.getDefaultLocation = function () {
    return defaultLocation;
  };
  this.draw = function () {
    // defaultLocation
    //this.radius
    console.log("draw");
  };

  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      if (!value.x || !value.y) {
        throw new Error("Invalid Location");
      }
      defaultLocation = value;
    },
  });
}

const circle = new Circle(10);
circle.defaultLocation = 1;
// circle.draw();
console.log(circle);
// console.log(circle.defaultLocation);
