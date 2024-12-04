import fs from "fs";
import readline from "readline";

const rl = readline.createInterface({
  input: fs.createReadStream("input.txt"),
  crlfDelay: Infinity,
});

let safeReports = 0;
rl.on("line", (line) => {
  let arrTrue = [];
  let nums = line.split(" ");
  let increaseOnly = false;

  for (let i = 0; i < nums.length; i++) {
    nums[i] = parseInt(nums[i]);

    if (nums[0] > parseInt(nums[1])) {
      // must decrease only
      // false means track this
      increaseOnly = false;
    } else if (nums[0] < parseInt(nums[1])) {
      // must increase only
      // true means track this
      increaseOnly = true;
    }
    if (increaseOnly) {
      if (
        nums[i] < parseInt(nums[i + 1]) &&
        parseInt(nums[i + 1]) - nums[i] >= 1 &&
        parseInt(nums[i + 1]) - nums[i] <= 3
      ) {
        arrTrue.push(true);
      }
      if (i === nums.length - 1 && arrTrue.length === nums.length - 1) {
        safeReports++;
      }
    } else {
      if (
        nums[i] > parseInt(nums[i + 1]) &&
        nums[i] - parseInt(nums[i + 1]) >= 1 &&
        nums[i] - parseInt(nums[i + 1]) <= 3
      ) {
        arrTrue.push(true);
      }
      if (i === nums.length - 1 && arrTrue.length === nums.length - 1) {
        safeReports++;
      }
    }
  }
});

rl.on("close", () => {
  console.log(safeReports);
});
