const fs = require("fs");

fs.readFile("input.txt", (err, data) => {
  if (err) throw err;
  let input = data.toString();
  const sack = input.split("\r\n");
  //console.log(sack);
  let points = 0;
  sack.forEach((element) => {
    let a = element.substring(0, element.length / 2);
    let b = element.substring(element.length / 2);
    //console.log(a, b);
    let same;
    a.split("").forEach((e) => {
      if (b.includes(e)) {
        same = e;
      }
    });
    //console.log(same);
    if (same == same.toUpperCase()) {
      points += same.charCodeAt(0) - 65 + 27;
      // console.log(same.charCodeAt(0) - 65 + 27);
    }
    if (same == same.toLowerCase()) {
      points += same.charCodeAt(0) - 96;
      //   console.log(same.charCodeAt(0) - 96);
    }
  });
  console.log(points);
});
