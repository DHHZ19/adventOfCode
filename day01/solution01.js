import fs from "fs";
import readline from "readline";

const rl = readline.createInterface({
  input: fs.createReadStream("input.txt"),
  crlfDelay: Infinity,
});

let floor = 0;
rl.on("line", (line) => {
  for (let i = 0; i < line.length; i++) {
    if (line[i] === ")") {
      floor--;
      if (floor === -1) {
        console.log(i, "winner");
        break;
      }
    } else if (line[i] === "(") {
      floor++;
      if (floor === -1) {
        console.log(i, "winner");
        break;
      }
    }
  }

  console.log(floor);
});
