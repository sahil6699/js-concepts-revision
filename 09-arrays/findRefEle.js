const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];

//this will return false because they are two completely different objects
// console.log(courses.includes({ id: 1, name: "a" }));

// const course = courses.find(function (course) {
//   return course.name === "a";
// });

// console.log(course);

const course = courses.findIndex(function (course) {
  return course.name === "b";
});
console.log(course);
