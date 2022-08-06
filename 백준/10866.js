const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
input.shift();
let answer = [];
// class Node {
//   constructor(value) {
//     this.prev = null;
//     this.next = null;
//     this.value = value;
//   }
// }
// class Dequeue {
//   constructor() {
//     this.head = null;
//     this.rear = null;
//     this._size = 0;
//   }
//   push_front(x) {
//     const node = new Node(x);
//     if (this._size === 0) {
//       this.rear = node;
//     } else {
//       node.next = this.head;
//       this.head.prev = node;
//     }
//     this.head = node;
//     this._size++;
//   }
//   push_back(x) {
//     const node = new Node(x);
//     if (this._size === 0) {
//       this.head = node;
//     } else {
//       node.prev = this.rear;
//       this.rear.next = node;
//     }
//     this.rear = node;
//     this._size++;
//   }
//   pop_front() {
//     if (this._size === 0) {
//       answer.push(-1);
//     } else {
//       const value = this.head.value;
//       if (this.head.next === null) {
//         this.head = null;
//         this.rear = null;
//       } else {
//         this.head = this.head.next;
//         this.head.prev = null;
//       }
//       this._size--;
//       answer.push(value);
//     }
//   }
//   pop_back() {
//     if (this._size === 0) {
//       answer.push(-1);
//     } else {
//       const value = this.rear.value;
//       if (this.rear.prev === null) {
//         this.head = null;
//         this.rear = null;
//       } else {
//         this.rear = this.rear.prev;
//         this.rear.next = null;
//       }
//       this._size--;
//       answer.push(value);
//     }
//   }
//   size() {
//     answer.push(this._size);
//   }
//   empty() {
//     this._size === 0 ? answer.push(1) : answer.push(0);
//   }
//   front() {
//     this._size === 0 ? answer.push(-1) : answer.push(this.head.value);
//   }
//   back() {
//     this._size === 0 ? answer.push(-1) : answer.push(this.rear.value);
//   }
// }

class Dequeue {
  constructor() {
    this.dequeue = {};
    this.head = 0;
    this.rear = 0;
  }
  size() {
    if (this.dequeue[this.rear] === undefined) {
      answer.push(0);
    } else {
      answer.push(this.rear - this.head + 1);
    }
  }
  push_front(x) {
    this.dequeue[this.rear] === undefined
      ? (this.dequeue["0"] = x)
      : (this.dequeue[--this.head] = x);
  }
  push_back(x) {
    this.dequeue[this.rear] === undefined
      ? (this.dequeue["0"] = x)
      : (this.dequeue[++this.rear] = x);
  }
  pop_front() {
    let temp;
    if (this.head === this.rear) {
      if (this.dequeue[this.head] === undefined) {
        answer.push(-1);
      } else {
        temp = this.dequeue[this.head];
        delete this.dequeue[this.head];
        this.head = 0;
        this.rear = 0;
        answer.push(temp);
      }
    } else {
      temp = this.dequeue[this.head];
      delete this.dequeue[this.head];
      this.head++;
      answer.push(temp);
    }
  }
  pop_back() {
    let temp;
    if (this.head === this.rear) {
      if (this.dequeue[this.rear] === undefined) {
        answer.push(-1);
      } else {
        temp = this.dequeue[this.rear];
        delete this.dequeue[this.rear];
        this.head = 0;
        this.rear = 0;
        answer.push(temp);
      }
    } else {
      temp = this.dequeue[this.rear];
      delete this.dequeue[this.rear];
      this.rear--;
      answer.push(temp);
    }
  }
  empty() {
    this.dequeue[this.rear] === undefined ? answer.push(1) : answer.push(0);
  }
  front() {
    this.dequeue[this.rear] === undefined
      ? answer.push(-1)
      : answer.push(this.dequeue[this.head]);
  }
  back() {
    this.dequeue[this.rear] === undefined
      ? answer.push(-1)
      : answer.push(this.dequeue[this.rear]);
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
