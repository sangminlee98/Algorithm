const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const has = input[1].split(" ").map((item) => +item);
const cards = input[3].split(" ").map((item) => +item);

let answer = [];
const map = new Map();
has.forEach((card) => {
  map.has(card) ? map.set(card, map.get(card) + 1) : map.set(card, 1);
});
cards.forEach((card) => {
  map.has(card) ? answer.push(map.get(card)) : answer.push(0);
});

console.log(answer.join(" "));
