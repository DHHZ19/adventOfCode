const fs = require("fs")

const input = fs.readFileSync("../input.txt", "utf-8").trim()

const arr = input.split('\n').map(str => str.split(/\s+/)).map(arr => arr.map(str => parseInt(str)).filter(str => !isNaN(str)))

let sum = 0

for (const x of arr) {
  const max = Math.max(...x)
  const min = Math.min(...x)

  const diff = max - min

  sum += diff
}
console.log(sum)
