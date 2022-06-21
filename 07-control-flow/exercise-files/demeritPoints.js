//Speed Limit = 70
//less than speed limit -> ok
//equal to speed limit -> ok
//for every
// 5kmh -> 1 point
//Math.floor(1.3)
//more than 12 points -> license suspended
console.log(checkSpeed(130));
function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed <= speedLimit) {
    return "ok";
  }

  if (speed >= speedLimit) {
    const excessSpeed = speed - speedLimit;
    const points = Math.floor(excessSpeed / kmPerPoint);

    if (points == 0) {
      return "ok";
    } else if (points >= 1 && points < 12) {
      return "Point: ", points;
    } else {
      return "License Supended";
    }
  }
}
