import fs from "fs";
import readline from "readline";


const rl = readline.createInterface({
  input: fs.createReadStream("input.txt"),
  crlfDelay: Infinity,
});


let result = 0
rl.on("line", (line) => {
  const map = {"a": true,"e": true,"i": true,"o": true,"u": true}
  const vowelsCountMap = {"a": 0, "e": 0, 'i': 0, "o": 0, "u": 0}
  let flag = false
  // contains at least three vowels
  // needs one letter than appears twice in a row
  // does not contain "ab", "cd", "pq", or "xy"

  if(line.includes("ab") || line.includes("cd") || line.includes("pq") || line.includes("xy") ){
   flag = true
  }

  let prevChar = ""
  let two = false
  let numVowles = 0
  let lineArr = line.split("")
    lineArr.forEach((char, i)=> {
    if (char in vowelsCountMap) {
      numVowles++
    }

    if (char === prevChar){
     two = true
    }
   prevChar = char
  })

  if (!flag && two){
    let start = 0

    if (numVowles >= 3){
     result++
    }

  }

  console.log(result)
})

