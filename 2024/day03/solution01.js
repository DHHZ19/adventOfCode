import fs from "fs";
import readline from "readline";

const rl = readline.createInterface({
  input: fs.createReadStream("input.txt"),
  crlfDelay: Infinity,
});

let result = 0
rl.on("line", (line) => {
  const regex = /mul\((\d+,\d+)\)/g;
  const matches = [...line.matchAll(regex)].map(match => match[1]);

  for(let i = 0; i < matches.length; i++){
      let nums = matches[i].split(",")
      result += parseInt(nums[0]) * parseInt(nums[1])
  }

});

rl.on("close", () => {
    console.log(result)
});
