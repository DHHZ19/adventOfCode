const fs = require("fs")

const input = fs.readFileSync("../input.txt", "utf-8").trim()

const arr = [...input].map(x => Number(x))

let toSum = []
for (let i = 0; i < arr.length; i++){
  // check if the number to the right matches the first
  // if it does then continue finding add that number to an array to sum them at the end
  // if it continues to match continue to add the numbers
  // if it stops matching stop mathcing the number
  // and don't push them up
  // its circular so make sure to check the last one witht he first continues
  if (arr[i] === arr[i + 1]) toSum.push(arr[i])

  if (i === arr.length - 1) {
    if (arr[0] === arr[arr.length - 1]) {
        toSum.push(arr[0])
    }
  }
}

if (toSum.length === 0) return console.log(0)
console.log(toSum.reduce((acc, c) => acc + c))
