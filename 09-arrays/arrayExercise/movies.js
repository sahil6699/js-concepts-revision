const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2018, rating: 3 },
  { title: "d", year: 2017, rating: 4.5 },
];

//all the movies in 2018 with rating > 4
//Sort them by their rating
//descending order
//pick their title

const temp = movies.filter(function (movie) {
  return movie.year === 2018 && movie.rating > 4;
});

const temp2 = temp.sort(function (a, b) {
  if (a.rating < b.rating) return 1;
  if (b.rating < a.rating) return -1;
  return 0;
});

const temp3 = temp2.map(function (movie) {
  return movie.title;
});

const temp4 = temp3.join();

console.log(temp);
console.log(temp2);
console.log(temp3);
console.log(temp4);
