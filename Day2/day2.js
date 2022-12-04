const fs = require("fs");

fs.readFile("test.txt", (err, data) => {
  if (err) throw err;
  let input = data.toString();
  const choices = input.split("\r\n");
  console.log(choices);
  let points = {
    X: 1,
    Y: 2,
    Z: 3,
  };
  let total = 0;
  choices.forEach((element) => {
    let [a, b] = element.split(" ");
    if (
      (a == "A" && b == "X") ||
      (a == "B" && b == "Y") ||
      (a == "C" && b == "Z")
    ) {
      total += 3;
    } else if (
      (a == "A" && b == "Y") ||
      (a == "B" && b == "Z") ||
      (a == "C" && b == "X")
    ) {
      total += 6;
    }
    total += points[b];
  });
  console.log(total);
});
