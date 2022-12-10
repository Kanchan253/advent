const fs = require("fs");

fs.readFile("input.txt", (err, data) => {
  if (err) throw err;
  let input = data.toString();
  const inp = input.split("\r\n");
  let tree = {};
  let currDir;
  let i = 0;
  let totalSize = 70000000;
  let updateSize = 30000000;
  let neededSize;
  while (i < inp.length) {
    // console.log(inp[i]);
    // TODO: log "/","a","e","d"
    if (inp[i].includes("$ cd")) {
      let dir = inp[i].split(" ")[2];
      if (dir !== "..") {
        if (dir == "/") {
          currDir = tree[dir] = {};
        } else {
          currDir[dir]["prev"] = currDir;
          currDir = currDir[dir];
        }
      } else {
        currDir = currDir["prev"];
      }
    }
    if (inp[i] === "$ ls") {
      i++;
      while (inp[i][0] != "$") {
        if (inp[i].includes("dir")) currDir[inp[i].split(" ")[1]] = {};
        else currDir[inp[i].split(" ")[1]] = inp[i].split(" ")[0];

        i++;
        if (i >= inp.length) break;
      }
    } else {
      i++;
    }
  }
  let sizes = [];
  function setSizes(tree) {
    let hasDir = false;
    let sum = 0;
    for (let key in tree) {
      if (key != "prev" && typeof tree[key] != "string") {
        hasDir = true;
        break;
      }
    }
    if (!hasDir) {
      for (let key in tree) {
        if (key != "prev") {
          sum += +tree[key];
        }
      }
    } else {
      for (let key in tree) {
        if (key != "prev") {
          if (typeof tree[key] != "string") {
            sum += setSizes(tree[key]);
          } else {
            sum += +tree[key];
          }
        }
      }
    }
    sizes.push(sum);
    return sum;
  }
  setSizes(tree);
  //to find the needed space on the disk:
  neededSize = updateSize - (totalSize - sizes[sizes.length - 1]);
  //console.log(neededSize);
  let dirSize,
    diff = Infinity;
  for (let i = 0; i <= sizes.length - 1; i++) {
    if (sizes[i] >= neededSize && diff > sizes[i] - neededSize) {
      dirSize = sizes[i];
      diff = dirSize - neededSize;
    }
  }
  console.log(dirSize);
});

// let tre = {
//   "/": {
//     prev: null,
//     a: {
//       prev: tre["/"],
//       e: {
//         prev: tre["/"][a],
//         i: 584,
//       },
//       f: 29116,
//       g: 2557,
//       "h.lst": 62596,
//     },
//     "b.txt": 14848514,
//     "c.dat": 8504156,
//     d: {
//       prev: tre["/"],
//       j: 4060174,
//       "d.log": 8033020,
//       "d.ext": 5626152,
//       k: 7214296,
//     },
//   },
// };

// size<=10000

// let sizes={"/":,
// "a":,
// "e":,
// "d":}
