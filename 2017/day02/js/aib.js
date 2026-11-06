const fs = require("fs")

const input = fs.readFileSync("../input.txt", "utf-8").trim()
const rows = input
  .split(/\r?\n/)
  .map(line => line.trim().split(/\s+/).map(Number))

function findRowQuotient(row) {
  for (let i = 0; i < row.length; i++) {
    for (let j = i + 1; j < row.length; j++) {
      if (row[i] % row[j] === 0) return row[i] / row[j]
      if (row[j] % row[i] === 0) return row[j] / row[i]
    }
  }

  throw new Error(`No evenly divisible pair found in row: ${row}`)
}

const checksum = rows.reduce((sum, row) => sum + findRowQuotient(row), 0)

console.log(checksum)
