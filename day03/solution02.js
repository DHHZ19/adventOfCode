import fs from "fs";

// north (^), south (v), east (>), or west (<)
let x = 0;
let y = 0;
let b = 0;
let z = 0;
const set = new Set();
fs.readFile("./input.txt", "utf8", (err, data) => {
  set.add(`${x}x${y}`);

  data.split("").forEach((t, i) => {
    switch (t) {
      case "^":
        if (i % 2 === 0) {
          y++;
        } else if (i % 2 === 1) {
          z++;
        }
        break;
      case "v":
        if (i % 2 === 0) {
          y--;
        } else if (i % 2 === 1) {
          z--;
        }
        break;
      case ">":
        if (i % 2 === 0) {
          x++;
        } else if (i % 2 === 1) {
          b++;
        }
        break;
      case "<":
        if (i % 2 === 0) {
          x--;
        } else if (i % 2 === 1) {
          b--;
        }
        break;
    }

    if (i % 2 === 0) {
      set.add(`${x}x${y}`);
    } else if (i % 2 === 1) {
      set.add(`${b}x${z}`);
    }
  });
});
