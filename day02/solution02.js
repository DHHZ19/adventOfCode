import fs from "fs";
import readline from "readline";

const rl = readline.createInterface({
  input: fs.createReadStream("input.txt"),
  crlfDelay: Infinity,
});
function isSafe(nums) {
  let isIncreasing = null;

  for (let i = 0; i < nums.length; i++) {
    let diff = nums[i] - nums[i + 1];

    if (Math.abs(diff) > 3 || Math.abs(diff) < 1) {
      return false;
    }

    if (isIncreasing === null) {
      isIncreasing = diff > 0;
    } else {
      if ((diff > 0 && !isIncreasing) || (diff < 0 && isIncreasing)) {
        return false;
      }
    }
  }

  return true;
}

function safeLevelRemoval(nums) {
  if (isSafe(nums)) return true;

  for (let i = 0; i < nums.length; i++) {
    let removed = nums.slice(0, i).concat(nums.slice(i + 1));

    if (isSafe(removed)) {
      return true;
    }
  }
}

let safeReports = 0;
rl.on("line", (line) => {
  let nums = line.split(" ").map((num) => parseInt(num));

  if (safeLevelRemoval(nums)) {
    safeReports++;
  }
});

rl.on("close", () => {
  console.log(safeReports);
});
