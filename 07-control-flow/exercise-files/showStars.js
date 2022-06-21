showStars(7);

function showStars(rows) {
  //   for (let i = 1; i <= rows; i++) {
  //     for (let j = 1; j <= i; j++) {
  //       process.stdout.write("*");
  //     }
  //     console.log();
  //   }

  for (let row = 1; row <= rows; row++) {
    let pattern = "";
    for (let i = 1; i <= row; i++) {
      pattern += "*";
    }
    console.log(pattern);
  }
}
