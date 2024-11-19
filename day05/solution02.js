import fs from "fs";
import readline from "readline";


const rl = readline.createInterface({
  input: fs.createReadStream("input.txt"),
  crlfDelay: Infinity,
});

let res = 0;

rl.on("line", (line) => {
  let flag1 = false
  let flag2 = false
  for (let i = 0; i < line.length; i++) {
    let substr = line[i] + line[i + 1]
    if(line.includes(substr,i + 2)){
      flag1 = true
    }

    if (i >= 0 && line[i] === line[i + 2]) {
     flag2 = true
    }
  }

  if(flag1 && flag2){
      res++
  }

  console.log(res)
})
