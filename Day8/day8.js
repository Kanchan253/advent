const fs = require("fs");

fs.readFile("input.txt", (err, data) => {
  if (err) throw err;
  let input = data.toString();
  //console.log(input);
  let visibleTrees = 0;
  let trees = [];
  input.split("\r\n").forEach((e) => {
    trees.push(e.split(""));
  });
  let height = trees.length;
  let width = trees[0].length;
  visibleTrees = 2 * height + 2 * width - 4;
  //console.log(visibleTrees);
  for (let i = 1; i <= height - 2; i++) {
    for (let j = 1; j <= width - 2; j++) {
      let curr = trees[i][j];
      if (
        !(
          trees[i].filter((v, idx) => idx < j && curr <= v).length &&
          trees[i].filter((v, idx) => idx > j && curr <= v).length &&
          trees.filter((v, idx) => idx < i && curr <= v[j]).length &&
          trees.filter((v, idx) => idx > i && curr <= v[j]).length
        )
      ) {
        //console.log(curr);
        visibleTrees++;
      }
    }
  }
  console.log(visibleTrees);
});
