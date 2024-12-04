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
  let l = parseInt(splitArr[0]) * parseInt(splitArr[1]);
  let face = l;
  l = 2 * l;

  let w = parseInt(splitArr[1]) * parseInt(splitArr[2]);
  let face1 = w;
  w = 2 * w;

  let h = parseInt(splitArr[2]) * parseInt(splitArr[0]);
  let face2 = h;
  h = 2 * h;

  res += l + w + h + Math.min(face, face1, face2);

  console.log(res);
});
