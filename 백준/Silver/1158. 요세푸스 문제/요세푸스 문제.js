const fs = require('fs');
const [n, k] = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);

const answer = [];
const queue = [];
for (let i = 1; i <= n; i++) {
  queue.push(i);
}

while (queue.length > 0) {
  for (let i = 1; i < k; i++) {
    const item = queue.shift();
    queue.push(item);
  }
  answer.push(queue.shift());
}

console.log(`<${answer.join(", ")}>`);
