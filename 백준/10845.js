const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
input.shift();
let answer = [];
class Node {
  constructor(value) {
    this.prev = null;
    this.next = null;
    this.value = value;
  }
}
class Queue {
  constructor() {
    this._size = 0;
    this.head = null;
    this.rear = null;
  }
  push(x) {
    const node = new Node(x);
    if (this._size === 0) {
      this.head = node;
    } else {
      this.rear.next = node;
      node.prev = this.rear;
    }
    this.rear = node;
    this._size++;
  }
  pop() {
    if (this._size === 0) {
      answer.push(-1);
    } else {
      const value = this.head.value;
      this.head = this.head.next;
      this._size--;
      answer.push(value);
    }
  }
  size() {
    answer.push(this._size);
  }
  empty() {
    this._size === 0 ? answer.push(1) : answer.push(0);
  }
  front() {
    this._size === 0 ? answer.push(-1) : answer.push(this.head.value);
  }
  back() {
    this._size === 0 ? answer.push(-1) : answer.push(this.rear.value);
  }
}
const queue = new Queue();
input.forEach((command) => {
  if (command.includes("push")) {
    queue.push(command.split(" ")[1]);
  }
  if (command === "pop") {
    queue.pop();
  }
  if (command === "size") {
    queue.size();
  }
  if (command === "empty") {
    queue.empty();
  }
  if (command === "front") {
    queue.front();
  }
  if (command === "back") {
    queue.back();
  }
});
console.log(answer.join("\n"));
