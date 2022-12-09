const fs = require("fs");

fs.readFile("input.txt", (err, data) => {
  if (err) throw err;
  let input = data.toString();
  //   console.log(input);
  let start_marker;
  for (let i = 0; i < input.length - 14; i++) {
    let check = input.slice(i, i + 14);
    let unique = new Set(check);
    if (unique.size === 14) {
      start_marker = i + 14;
      break;
    }
  }
  console.log(start_marker);
});
