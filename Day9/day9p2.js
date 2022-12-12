const fs = require("fs");

fs.readFile("input.txt", (err, data) => {
  if (err) throw err;
  let input = data.toString();
  let ins = input.split("\r\n");
  let height = 500;
  let visited = new Set();
  let knots = [];
  for (let i = 0; i < 10; i++) {
    knots.push([height - 1, 0]);
  }
  let m = {
    R: (knot) => ++knot[1],
    L: (knot) => --knot[1],
    U: (knot) => --knot[0],
    D: (knot) => ++knot[0],
  };
  visited.add(knots[knots.length - 1].join(""));
  ins.forEach((e) => {
    let [dir, steps] = e.split(" ");
    for (let i = 1; i <= steps; i++) {
      m[dir](knots[0]);
      let prevKnot = knots[0];
      for (let j = 1; j <= knots.length - 1; j++) {
        let currKnot = knots[j];
        if (
          !(
            (
              (currKnot[0] == prevKnot[0] && currKnot[1] == prevKnot[1]) || //same pos
              (currKnot[0] == prevKnot[0] && currKnot[1] + 1 == prevKnot[1]) || //right
              (currKnot[0] == prevKnot[0] && currKnot[1] - 1 == prevKnot[1]) || //left
              (currKnot[0] + 1 == prevKnot[0] && currKnot[1] == prevKnot[1]) || //down
              (currKnot[0] - 1 == prevKnot[0] && currKnot[1] == prevKnot[1]) || //up
              (currKnot[0] - 1 == prevKnot[0] &&
                currKnot[1] + 1 == prevKnot[1]) || //top right (diagonal)
              (currKnot[0] - 1 == prevKnot[0] &&
                currKnot[1] - 1 == prevKnot[1]) || //top left (diagonal)
              (currKnot[0] + 1 == prevKnot[0] &&
                currKnot[1] + 1 == prevKnot[1]) || //bottom right (diagonal)
              (currKnot[0] + 1 == prevKnot[0] && currKnot[1] - 1 == prevKnot[1])
            ) //bottom left (diagonal)
          )
        ) {
          if (currKnot[1] != prevKnot[1]) {
            prevKnot[1] > currKnot[1] ? m["R"](currKnot) : m["L"](currKnot);
          }
          if (currKnot[0] != prevKnot[0]) {
            prevKnot[0] > currKnot[0] ? m["D"](currKnot) : m["U"](currKnot);
          }
        }
        prevKnot = currKnot;
      }
      visited.add(knots[knots.length - 1].join(""));
    }
  });
  console.log(visited.size);
});
