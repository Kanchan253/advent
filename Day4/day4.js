const fs = require("fs");

fs.readFile("input.txt", (err, data) => {
  if (err) throw err;
  let input = data.toString();
  const num = input.split("\r\n");
  console.log(num);
  let count = 0;
  num.forEach((e) => {
    let [a, b] = e.split(",");
    console.log(a, b);
    let [a1, a2] = a.split("-");
    console.log(a1, a2);
    let [b1, b2] = b.split("-");
    console.log(b1, b2);
    if ((+b1 >= +a1 && +b2 <= +a2) || (+b1 <= +a1 && +b2 >= +a2)) {
      count++;
    }
  });
  console.log(count);
});
