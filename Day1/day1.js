const fs = require("fs");

fs.readFile("textinput.txt", (err, data) => {
  if (err) throw err;
  let input = data.toString();
  const cal = input.split("\r\n");
  console.log(cal);
  let arr = [];
  let sum = 0;
  for (let i = 0; i < cal.length; i++) {
    if (cal[i] !== "") {
      //the extra = checks the datatype as well(strict checking)
      sum += +cal[i]; //the + before the cal[i] converts the string to integer
    } else {
      arr.push(sum);
      sum = 0;
    }
  }
  arr.push(sum);
  console.log(arr);
  console.log("The most no of cal:" + Math.max(...arr));
  arr.sort((a, b) => b - a);
  console.log(arr);
  let sortedSum = arr[0] + arr[1] + arr[2];
  console.log(sortedSum);
});
