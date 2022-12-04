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
    if (b == "X") {
      //lose
      if (a == "A") {
        b = "Z";
      } else if (a == "B") {
        b = "X";
      } else {
        b = "Y";
      }
    } else if (b == "Y") {
      //draw
      if (a == "A") {
        b = "X";
      } else if (a == "B") {
        b = "Y";
      } else {
        b = "Z";
      }
    } else {
      if (a == "A") {
        b = "Y";
      } else if (a == "B") {
        b = "Z";
      } else {
        b = "X";
      }
    }
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
