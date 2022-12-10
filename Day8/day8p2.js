const fs = require("fs");

fs.readFile("input.txt", (err, data) => {
  if (err) throw err;
  let input = data.toString();
  //console.log(input);
  let trees = [];
  let score = 0;
  input.split("\r\n").forEach((e) => {
    trees.push(e.split(""));
  });
  let height = trees.length;
  let width = trees[0].length;
  visibleTrees = 2 * height + 2 * width - 4;
  //console.log(visibleTrees);
  for (let i = 1; i <= height - 2; i++) {
    //row
    for (let j = 1; j <= width - 2; j++) {
      //col
      let curr = trees[i][j];
      let viewBlocked = false;
      let left = 0;
      for (let k = j - 1; k >= 0; k--) {
        if (!viewBlocked) {
          if (curr > trees[i][k]) {
            left++;
          } else {
            viewBlocked = true;
            left++;
          }
        }
      }
      viewBlocked = false;
      let right = 0;
      for (let k = j + 1; k <= width - 1; k++) {
        if (!viewBlocked) {
          if (curr > trees[i][k]) {
            right++;
          } else {
            viewBlocked = true;
            right++;
          }
        }
      }
      viewBlocked = false;
      let up = 0;
      for (let k = i - 1; k >= 0; k--) {
        if (!viewBlocked) {
          if (curr > trees[k][j]) {
            up++;
          } else {
            viewBlocked = true;
            up++;
          }
        }
      }
      viewBlocked = false;
      let down = 0;
      for (let k = i + 1; k <= height - 1; k++) {
        if (!viewBlocked) {
          if (curr > trees[k][j]) {
            down++;
          } else {
            viewBlocked = true;
            down++;
          }
        }
      }
      let mul = up * down * left * right;
      if (score < mul) {
        score = mul;
      }
    }
  }
  console.log(score);
});
