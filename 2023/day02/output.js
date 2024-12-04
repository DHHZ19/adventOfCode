//12 red cubes, 13 green cubes, and 14 blue cubes?

let colorsMap = {
  red: 12,
  green: 13,
  blue: 14,
};

import fs from "fs";
import readline from "readline";

const rl = readline.createInterface({
  input: fs.createReadStream("input.txt"),
  crlfDelay: Infinity,
});
let result = 0;
rl.on("line", (line) => {
  const gameId = line.split(":")[0].split(" ")[1];
  const game = line.split(":")[1];

  let validGames = game
    .replaceAll(";", ",")
    .split(",")
    .every((reveal) => {
      const [occurence, color] = reveal.trim().split(" ");

      return Number(occurence) <= colorsMap[color];
    });

  if (validGames) {
    result += Number(gameId);
  }
  console.log(result);
});
