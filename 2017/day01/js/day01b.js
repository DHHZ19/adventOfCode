
const fs = require("fs")
const path = require("path")

const input = fs.readFileSync(path.join(__dirname, "../../input.txt"), "utf-8").trim();
const arr = [...input].map(x => Number(x))

let sum = 0
for (let i = 0; i < arr.length; i++){
  const buffer = arr.length / 2
  const mid = (i + buffer) % arr.length
  if (arr[i] === arr[mid]) {
    sum += arr[i]
  }
}

console.log(sum)
