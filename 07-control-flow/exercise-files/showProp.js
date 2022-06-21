const movie = {
  title: "happy new year",
  releaseYear: 2018,
  rating: 4.5,
  director: "b",
  actor: "cd",
};

showProperties(movie);

function showProperties(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "string") console.log(key, " ", obj[key]);
  }
}
