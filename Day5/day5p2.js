const fs = require("fs");

fs.readFile("input.txt", (err, data) => {
  if (err) throw err;
  let input = data.toString();
  const num = input.split("\r\n");
  let stacks = num.slice(0, num.indexOf(""));
  let inst = num.slice(num.indexOf("") + 1);
  let ins = [];
  inst.forEach((e) => {
    let no = e.split(" ");
    ins.push([no[1], no[3], no[5]]);
  });
  let n = stacks[stacks.length - 1].trim().split("   ");
  let max = n.length;
  let stobj = {};
  for (let i = 1; i < max + 1; i++) {
    stobj[i] = [];
  }
  for (let j = stacks.length - 2; j >= 0; j--) {
    let l = 1;
    for (let k = 1; k <= stacks[j].length; k += 4) {
      if (stacks[j][k] != " ") {
        stobj[l].push(stacks[j][k]);
      }
      l++;
    }
  }
  ins.forEach((e) => {
    let [total, start, end] = e;
    stobj[end].push(
      ...stobj[start].splice(stobj[start].length - total, stobj[start].length)
    );
    // console.log(stobj);
  });
  let top = "";
  for (const key in stobj) {
    top += stobj[key].pop();
  }
  console.log(top);
});
