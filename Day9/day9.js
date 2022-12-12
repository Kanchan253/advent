const fs = require("fs");

fs.readFile("input.txt", (err, data) => {
  if (err) throw err;
  let input = data.toString();
  let ins = input.split("\r\n");
  let height = 100;
  let visited = new Set();
  let h = [Math.floor((height - 1) / 2), Math.floor((height - 1) / 2)],
    t = [Math.floor((height - 1) / 2), Math.floor((height - 1) / 2)];
  let m = {
    R: (knot) => ++knot[1],
    L: (knot) => --knot[1],
    U: (knot) => --knot[0],
    D: (knot) => ++knot[0],
  };
  visited.add(t.join(""));
  ins.forEach((e) => {
    let [dir, steps] = e.split(" ");
    for (let i = 1; i <= steps; i++) {
      m[dir](h);
      if (
        !(
          (
            (t[0] == h[0] && t[1] == h[1]) || //same pos
            (t[0] == h[0] && t[1] + 1 == h[1]) || //right
            (t[0] == h[0] && t[1] - 1 == h[1]) || //left
            (t[0] + 1 == h[0] && t[1] == h[1]) || //down
            (t[0] - 1 == h[0] && t[1] == h[1]) || //up
            (t[0] - 1 == h[0] && t[1] + 1 == h[1]) || //top right (diagonal)
            (t[0] - 1 == h[0] && t[1] - 1 == h[1]) || //top left (diagonal)
            (t[0] + 1 == h[0] && t[1] + 1 == h[1]) || //bottom right (diagonal)
            (t[0] + 1 == h[0] && t[1] - 1 == h[1])
          ) //bottom left (diagonal)
        )
      ) {
        if (t[1] != h[1]) {
          h[1] > t[1] ? m["R"](t) : m["L"](t);
        }
        if (t[0] != h[0]) {
          h[0] > t[0] ? m["D"](t) : m["U"](t);
        }
        visited.add(t.join(""));
      }
    }
  });
  console.log(visited.size);
});
