let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
input.shift();
const problem = input.map((arr) => {
  return arr.split(" ").map((str) => +str);
});
class Node {
  constructor(value) {
    this.prev = null;
    this.next = null;
    this.value = value;
  }
}
class Queue {
  constructor() {
    this.head = null;
    this.rear = null;
    this.size = 0;
  }
  enqueue(x) {
    const node = new Node(x);
    if (this.size === 0) {
      this.head = node;
    } else {
      this.rear.next = node;
      node.prev = this.rear;
    }
    this.rear = node;
    this.size++;
  }
  dequeue() {
    if (this.size === 0) return -1;
    const value = this.head.value;
    if (this.head === this.rear) {
      this.head = null;
      this.rear = null;
      this.size--;
      return value;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      this.size--;
      return value;
    }
  }
  peek() {
    if (this.size === 0) return -1;
    return this.head.value;
  }
  findMax() {
    if (this.size === 0) return -1;
    if (this.size === 1) return this.head.value;
    let value = [];
    let head = this.head;
    while (true) {
      value.push(head.value);
      if (!head.next) break;
      head = head.next;
    }
    return Math.max(...value);
  }
}
let answer = [];
for (let i = 0; i < problem.length; i += 2) {
  const queue = new Queue();
  let pointer = problem[i][1];
  let count = 0;
  problem[i + 1].forEach((num) => queue.enqueue(num));
  while (true) {
    if (queue.peek() < queue.findMax()) {
      if (pointer === 0) {
        pointer = queue.size - 1;
        const v = queue.dequeue();
        queue.enqueue(v);
      } else {
        pointer--;
        const v = queue.dequeue();
        queue.enqueue(v);
      }
    } else {
      if (pointer === 0) {
        count++;
        answer.push(count);
        break;
      } else {
        queue.dequeue();
        count++;
        pointer--;
      }
    }
  }
}
console.log(answer.join("\n"));
