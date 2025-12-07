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
            // const firstHalf = s.substring(0, s.length / 2)
            // const secondHalf = s.substring(s.length / 2)

            // if(firstHalf === secondHalf){
            //     solution += i
            // }


        } 
        // else if there isn't split perfectly half sequence we need to find a sequence that
        // can be of any number of repeating values e.g. 212121 or 111 or 123123123
        
        //idea 1:
        // create a hash map where the key is the `idx` and the value is the `num`
        // loop through the hash by the key (idx)
        // mhmm nvm


        // idea 2: 
        // overview: loop through the array, assume a sequence from the start 
        // a array var 'seq' as the tracker of the sequence 
        // START LOOP through items, adding items to array seq as we loop to the array
        // AS we loop through each 'item', check if the zeroith element in the seq array is found
            // if it is we start checking if there is a sequence, once its falsy we start the check over again.

        
    }
})

console.log(solution)