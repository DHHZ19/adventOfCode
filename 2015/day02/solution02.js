import fs from "fs";
import readline from "readline";

const rl = readline.createInterface({
  input: fs.createReadStream("input.txt"),
  crlfDelay: Infinity,
});
//  length, width, height
// 2*l*w + 2*w*h + 2*h*l
let res = 0;
rl.on("line", (line) => {
  let splitArr = line.split("x");

  let perim1 = 2 * parseInt(splitArr[2]) + 2 * parseInt(splitArr[1]);
  let perim2 = 2 * parseInt(splitArr[0]) + 2 * parseInt(splitArr[1]);
  let perim3 = 2 * parseInt(splitArr[0]) + 2 * parseInt(splitArr[2]);

  res +=
    parseInt(splitArr[1]) * parseInt(splitArr[0]) * parseInt(splitArr[2]) +
    Math.min(perim1, perim2, perim3);

  console.log(res);
});
