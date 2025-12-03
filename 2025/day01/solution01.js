const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8');
const lines = input.trim().split('\n');
// dials starts at 50
let solution = 0;
let dial = 50
let num = 0;
for (const line of lines) {
    const direction = line[0];
    const value = parseInt(line.slice(1));
    
  if(direction === 'L')  {
    for(let i = 1; i <= value; i++){
        dial -= 1 
        if(dial < 0){
            dial = 99
        }
        if(dial === 0){
            solution++
        }
    }
  } else if(direction === "R"){
    for(let i = 1; i <= value; i++){
        dial += 1
        if(dial > 99){
            dial = 0
        }
        if(dial === 0){
            solution++
        }
    }
  }

}
console.log(solution)