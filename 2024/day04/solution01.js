import fs from "fs";
import readline from "readline";

const rl = readline.createInterface({
  input: fs.createReadStream("input.txt"),
  crlfDelay: Infinity,
});

let result = 0
// horizontal, vertical, diagonal, written backwards, or even overlapping other words
rl.on("line", (line) => {
  let letters = []
  letters.push(line.split(''))
  console.log(letters)  

  for(let i = 0; i < letters.length; i++) { 
    for(let j = 0; j < letters[i].length; j++) {  
      console.log(letters[i])
      if(letters[i][j] === 'X'){
        let sum = 0
        let word = 'X'
        result += findRestOfWord(letters, i, j, sum, word) 
      }
    }
  }

  return result
});

function findRestOfWord(letters, i, j, sum, word) {
  if(i >= letters.length || j >= letters[0].length || j < 0 || i < 0) {
    return 0
  } 

  if(letters[i][j] !== 'M') {
    return 0
  }

  if(letters[i][j] === 'M') { 
    word += 'M'
  }

  if(letters[i][j] === 'A') { 
    word += 'A'
  }

  if(letters[i][j] === 'S') { 
    word += 'S'
  }

  if(word === 'XMAS' ) {
    return sum
  } else if(word.length > 1){
    return 0
  }

    sum += findRestOfWord(letters, i+1, j, sum, word)
    sum += findRestOfWord(letters, i-1, j, sum, word)
    sum += findRestOfWord(letters, i+1, j+1, sum, word) 
    sum += findRestOfWord(letters, i+1, j-1, sum, word) 
    sum += findRestOfWord(letters, i-1, j-1,sum, word) 
    sum += findRestOfWord(letters, i-1, j+1,sum, word) 
    sum += findRestOfWord(letters, i, j+1,sum, word)
    sum += findRestOfWord(letters, i, j-1,sum, word)

} 

rl.on("close", () => {
    console.log(result)
});
