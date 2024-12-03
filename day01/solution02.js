import fs from "fs";
import readline from "readline";

const rl = readline.createInterface({
  input: fs.createReadStream("input.txt"),
  crlfDelay: Infinity,
});

let g1 = [];
let g2 = [];

let result = 0;

rl.on("line", (line) => {
  let game1 = line.split("   ")[0];
  let game2 = line.split("   ")[1];

  g1.push(game1);
  g2.push(game2);
});

rl.on("close", () => {
  g1.sort((a, b) => a - b);
  g2.sort((a, b) => a - b);

  for (let i = 0; i < g1.length; i++) {
    result += g1[i] * g2.filter((g) => g === g1[i]).length;
  }
  console.log(result);
});
