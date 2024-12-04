import fs from "fs";
import readline from "readline";

const rl = readline.createInterface({
  input: fs.createReadStream("input.txt"),
  crlfDelay: Infinity,
});

let result = 0;
let flag = true;
rl.on("line", (line) => {
  const regex = /mul\((\d+,\d+)\)|do\(\)|don\'t\(\)/g;
  const matches = [...line.matchAll(regex)].map((match) =>
    match[1] ? match[1] : match[0]
  );

  for (let i = 0; i < matches.length; i++) {
    let nums = matches[i].split(",");

    if (matches[i] === "do()") {
      flag = true;
    } else if (matches[i] === "don't()") {
      flag = false;
    } else if (flag === true) {
      console.log(matches[i]);
      result += parseInt(nums[0]) * parseInt(nums[1]);
    }
  }
});

rl.on("close", () => {
  console.log(result);
});
