const fs = require("fs")

const input = fs.readFileSync("../input.txt", "utf-8").trim()

const arr = input.split('\n').map(str => str.split(/\s+/)).map(arr => arr.map(str => parseInt(str)).filter(str => !isNaN(str)))

let sum  = 0
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    let curr = sum
    for (let y = j+1; y < arr[i].length; y++){
      if (arr[i][j] % arr[i][y ] === 0) {
        sum += ( arr[i][j]  / arr[i][y ])
        break
      }
      else if (arr[i][y] % arr[i][j] === 0) {
        sum += ( arr[i][y] / arr[i][j])
        break
      }

    }
    if (curr !== sum) break
  }
}
console.log(sum)
