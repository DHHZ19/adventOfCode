
import fs from "fs";
import readline from "readline";


const rl = readline.createInterface({
  input: fs.createReadStream("input.txt"),
  crlfDelay: Infinity,
});
     // row, col
// toggle 1,0 through 2,0
// toggle 0,1 through 1,2
//  let arr = [
//     [0,0,0],
//     [0,0,0],
//     [0,0,0]
//  ]

// col, row
// for(let i = x1; i <= x2; i++){
//     for(let j = y1; j <= y2; j++){
//         arr[i][j] = 1
//     }
// }
let grid = new Array(1000).fill().map(() => Array(1000).fill(0))
let res = 0;
rl.on("line", (line) => {

    let i = line.split(" ")

    let x1 = 0
    let y1 = 0
    let x2 = 0
    let y2 = 0

    let str = ""
    if(i.length === 4){
        if(i[0] === "toggle"){
            str = "toggle"
        }
        x1 = parseInt(i[1].split(",")[0])
        y1 = parseInt(i[1].split(",")[1])
        x2 = parseInt(i[3].split(",")[0])
        y2 = parseInt(i[3].split(",")[1])
     } else if (i.length === 5){
        if(i[1] === "on"){
            str = "on"
        } else if(i[1] === "off"){
            str = "off" 
        }
        x1 = parseInt(i[2].split(",")[0])
        y1 = parseInt(i[2].split(",")[1])
        x2 = parseInt(i[4].split(",")[0])
        y2 = parseInt(i[4].split(",")[1])
    }
    console.log(x1, y1, x2, y2, str)
     switch(str){
        case "on":
            for(let i = x1; i <= x2; i++){
                for(let j = y1; j <= y2; j++){
                    grid[i][j] = 1
                }
            }
            break;
        case "off":
            for(let i = x1; i <= x2; i++){
                for(let j = y1; j <= y2; j++){
                    grid[i][j] = 0
                }
            }
            break;
        case "toggle":
            for(let i = x1; i <= x2; i++){
                for(let j = y1; j <= y2; j++){
                    grid[i][j] = grid[i][j] === 0 ? 1 : 0;
                }
            }
            break;
     }
})

rl.on("close", () => {
    for (const row of grid){
        res += row.reduce((acc, curr) => acc + curr, 0)
    }
    console.log(res)
})

