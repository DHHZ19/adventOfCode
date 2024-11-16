import fs from 'fs';

// north (^), south (v), east (>), or west (<)
let x = 0
let y = 0
let hash = new Set()
fs.readFile('./input.txt', 'utf8', (err, data) => {
  hash.add(`${x}${y}`)

    data.split("").forEach( t => {
      switch(t){
        case '^':
          y++
          break
        case 'v':
          y--
          break
        case '>':
          x++
          break
        case '<':
          x--
          break
      }
      hash.add(`${x}${y}`)
    })

  console.log(hash.size)
})

