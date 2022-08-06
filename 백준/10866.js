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
class Dequeue {
  constructor() {
    this.head = null;
    this.rear = null;
    this._size = 0;
  }
  push_front(x) {
    const node = new Node(x);
    if (this._size === 0) {
      this.rear = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
    }
    this.head = node;
    this._size++;
  }
  push_back(x) {
    const node = new Node(x);
    if (this._size === 0) {
      this.head = node;
    } else {
      node.prev = this.rear;
      this.rear.next = node;
    }
    this.rear = node;
    this._size++;
  }
  pop_front() {
    if (this._size === 0) {
      answer.push(-1);
    } else {
      const value = this.head.value;
      this.head = this.head.next;
      this._size--;
      answer.push(value);
    }
  }
  pop_back() {
    if (this._size === 0) {
      answer.push(-1);
    } else {
      const value = this.rear.value;
      this.rear = this.rear.prev;
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
const dequeue = new Dequeue();
input.forEach((command) => {
  if (command.includes("push_front")) {
    dequeue.push_front(command.split(" ")[1]);
  }
  if (command.includes("push_back")) {
    dequeue.push_back(command.split(" ")[1]);
  }
  if (command === "pop_front") {
    dequeue.pop_front();
  }
  if (command === "pop_back") {
    dequeue.pop_back();
  }
  if (command === "size") {
    dequeue.size();
  }
  if (command === "empty") {
    dequeue.empty();
  }
  if (command === "front") {
    dequeue.front();
  }
  if (command === "back") {
    dequeue.back();
  }
});
console.log(answer.join("\n"));
