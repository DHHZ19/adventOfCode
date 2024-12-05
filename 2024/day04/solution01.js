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
        result += findRestOfWord(letters, i, j, 0, 'X') 
      }
    }
  }

  return result
});

function findRestOfWord(letters, i, j, sum, word) {
  if(i >= letters.length || j >= letters[0].length || j < 0 || i < 0) {
    return 0
  } 

    //right
    sum += findRestOfWord(letters, i+1, j, sum, word)
    //left
    sum += findRestOfWord(letters, i-1, j, sum, word)
    // top right
    sum += findRestOfWord(letters, i+1, j+1, sum, word) 
    // top left
    sum += findRestOfWord(letters, i+1, j-1, sum, word) 
    // bottom left
    sum += findRestOfWord(letters, i-1, j-1,sum, word) 
    // bottom right
    sum += findRestOfWord(letters, i-1, j+1,sum, word) 
    // top
    sum += findRestOfWord(letters, i, j+1,sum, word)
    // bottom
    sum += findRestOfWord(letters, i, j-1,sum, word)

  if(letters[i][j] === 'M') { 
    word += 'M'
  } else if(letters[i][j] === 'A' && word === 'XM') {
    word += 'A'
  } else if (letters[i][j] === 'S' && word === 'XMA') {
    word += 'S'
    return sum
  }

} 

rl.on("close", () => {
    console.log(result)
});
