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
    let [a1, a2] = a.split("-"); //array destructuring
    console.log(a1, a2);
    let [b1, b2] = b.split("-"); //array destructuring
    console.log(b1, b2);
    if (!(+a1 < +b1 && +a2 < +b1) && !(+b1 < +a1 && +b2 < +a1)) {
      count++;
    }
  });
  console.log(count);
});
