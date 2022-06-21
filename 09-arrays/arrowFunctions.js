const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];

const course = courses.find((course) => course.name === "b");
const course1 = courses.findIndex((course) => course.name === "b");

console.log(course);
console.log(course1);
