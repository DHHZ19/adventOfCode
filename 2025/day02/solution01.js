const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(path.join(__dirname, 'example.txt'), 'utf8');
const line = input.trim()

let solution = 0

line.split(',').forEach((range) => {
    const realRange = range.split('-')
    let start = realRange[0]
    let end = realRange[1]

    for(let i = parseInt(start); i <= parseInt(end); i++){
        const s = i.toString()
        if(s.length % 2 === 0){
            const firstHalf = s.substring(0, s.length / 2)
            const secondHalf = s.substring(s.length / 2)

            if(firstHalf === secondHalf){
                solution += i
            }
        }
    }
})

console.log(solution)
