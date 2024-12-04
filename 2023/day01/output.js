import fs from "fs";
let numberMap = new Map();
numberMap.set("zero", 0);
numberMap.set("one", 1);
numberMap.set("two", 2);
numberMap.set("three", 3);
numberMap.set("four", 4);
numberMap.set("five", 5);
numberMap.set("six", 6);
numberMap.set("seven", 7);
numberMap.set("eight", 8);
numberMap.set("nine", 9);
numberMap.set("ten", 10);

fs.readFile("input.txt", "utf8", (err, data) => {
  let result = [];
  let use = data.split("");
  let temp = [];
  for (let i = 0; i < use.length; i++) {
    if (!isNaN(use[i]) && use[i] !== "\n") {
      temp.push(use[i]);
    }
    if (use[i] === "\n") {
      result.push([temp[0], temp[temp.length - 1]].reduce((acc, c) => acc + c));
      temp = [];
    }
  }
  console.log(result.reduce((acc, c) => parseInt(acc) + parseInt(c)));

  // doesn't account for last line, how to account for last line?
});

// chat gpt solution that accounts for last line

// import fs from "fs"
// import readline from "readline"

// const rl = readline.createInterface({
//     input: fs.createReadStream('input.txt'),
//     crlfDelay: Infinity
// })

// let result=[]
// let temp = [];
// rl.on('line', (line) => {
//     let use = line.split('')
//     for(let i= 0; i<use.length; i++){
//         if(!isNaN(use[i]) && use[i] !== "\n"){
//             temp.push(use[i])
//         }
//     }
//     result.push([temp[0],temp[temp.length -1]].reduce((acc,c) => acc + c))
//     temp = []
// }).on('close', () => {
//     console.log(result.reduce((acc, c) => parseInt(acc) + parseInt(c)))
// })

// import fs from "fs"

// fs.readFile('input.txt', 'utf8', (err, data) => {
//   let result=[]
//   let use = data.split('\n')
//   let temp = [];
//   for(let i= 0; i<use.length; i++){
//     let line = use[i]
//     let lineChars = line.split('')
//     for(let j= 0; j<lineChars.length; j++){
//         if(!isNaN(lineChars[j]) && lineChars[j] !== "\n"){
//             temp.push(lineChars[j])
//         }
//     }
//     result.push([temp[0],temp[temp.length -1]].reduce((acc,c) => acc + c))
//     temp = []
//   }
//   console.log(result.reduce((acc, c) => parseInt(acc) + parseInt(c)))
// })

/* PART TWO */
fs.readFile("input.txt", "utf8", (err, data) => {
  const nums = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  data = data.split("\n");

  let total = 0;

  data.forEach((element) => {
    const numbers = [];
    let wordStartCursor = 0;
    let cursor = 1;

    while (cursor <= element.length) {
      const stringSliceToInspect = element.slice(wordStartCursor, cursor);

      if (
        !isNaN(Number(stringSliceToInspect[stringSliceToInspect.length - 1]))
      ) {
        numbers.push(stringSliceToInspect[stringSliceToInspect.length - 1]);
        wordStartCursor = cursor;
      } else {
        let indexToPush = -1;

        Object.keys(nums).forEach((num, index) => {
          if (stringSliceToInspect.includes(num)) {
            indexToPush = index;
          }
        });

        if (indexToPush !== -1) {
          numbers.push(String(Object.values(nums)[indexToPush]));
          wordStartCursor = cursor - 1;
        }
      }

      cursor++;
    }

    const [first = 0, last = 0] = [numbers[0], numbers[numbers.length - 1]];
    total += Number(first + last);
  });

  console.log(total);

  // doesn't account for last line, how to account for last line?
});
