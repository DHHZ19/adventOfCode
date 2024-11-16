import fs from 'fs';

// north (^), south (v), east (>), or west (<)
const hash = {0: true}
let x = 0
let deliveredHouses = 1
fs.readFile('./input.txt', 'utf8', (err, data) => {
  let s = data.split("")

  s.forEach(x => {
    switch(x){
      case '^':
        if (!hash[x++]){
          deliveredHouses++;
        }
        break
      case 'v':
        if (!hash[x++]){
          deliveredHouses++;
        }
        x--
        break
      case '>':
        if (!hash[x++]){
          deliveredHouses++;
        }
        x++
        break
      case '<':
        if (!hash[x++]){
          deliveredHouses++;
        }
        x--
        break
    }

   console.log(deliveredHouses)
  })

})

