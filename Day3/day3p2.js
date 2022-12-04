const fs = require("fs");

fs.readFile("input.txt", (err, data) => {
  if (err) throw err;
  let input = data.toString();
  const sack = input.split("\r\n");
  //console.log(sack);
  let points = 0;
  let same;
  for (let i = 0; i < sack.length; i += 3) {
    sack[i].split("").forEach((e) => {
      if (sack[i + 1].includes(e) && sack[i + 2].includes(e)) {
        same = e;
      }
    });
    if (same == same.toUpperCase()) {
      points += same.charCodeAt(0) - 65 + 27;
      // console.log(same.charCodeAt(0) - 65 + 27);
    }
    if (same == same.toLowerCase()) {
      points += same.charCodeAt(0) - 96;
      //   console.log(same.charCodeAt(0) - 96);
    }
  }
  console.log(points);
});
