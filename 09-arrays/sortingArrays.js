const numbers = [2, 3, 1];

//sort method reflects the changes in a orignal array
//sort method converts each element to a string and then sorts the array
numbers.sort();
console.log(numbers);

//reverse method reflects the changes in the orignal array
//reverses the order of elements in an array
numbers.reverse();
console.log(numbers);

// sort and reverse method very well with numbers and string but with objects we have to do some extra work

const courses = [
  { id: 1, name: "Node.js" },
  { id: 2, name: "javascript" },
  { id: 2, name: "avascript" },
];

courses.sort(function (a, b) {
  // a < b => -1
  //a > b => 1
  //a ==== b => 0
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});
console.log(courses);
