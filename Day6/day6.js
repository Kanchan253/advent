const fs = require("fs");

fs.readFile("input.txt", (err, data) => {
  if (err) throw err;
  let input = data.toString();
  //   console.log(input);
  let start_marker;
  for (let i = 0; i < input.length - 4; i++) {
    let check = input.slice(i, i + 4);
    let unique = new Set(check);
    if (unique.size === 4) {
      start_marker = i + 4;
      break;
    }
  }
  console.log(start_marker);
});
