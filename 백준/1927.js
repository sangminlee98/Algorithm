const fs = require("fs");
const [_, ...input] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const num = input.map((v) => +v);

class MinHeap {
  constructor() {
    this.node = [];
  }
  enqueue(num) {
    this.node.push(num);
    this.bubbleUp();
  }
  bubbleUp(index = this.node.length - 1) {
    const parentIndex = Math.floor((index - 1) / 2);
    if (this.node[index] < this.node[parentIndex]) {
      const t = this.node[index];
      this.node[index] = this.node[parentIndex];
      this.node[parentIndex] = t;
      this.bubbleUp(parentIndex);
    }
  }
  extract() {
    const value = this.node[0];
    if (this.node.length === 0) console.log("error");
    if (this.node.length === 1) {
      this.node.pop();
      return value;
    } else {
      this.node[0] = this.node.pop();
      this.bubbleDown();
      return value;
    }
  }
  bubbleDown(index = 0) {
    const leftChildIndex = index * 2 + 1;
    const rightChildIndex = index * 2 + 2;
    let minimum = index;
    if (!this.node[leftChildIndex] && !this.node[rightChildIndex]) return;
    if (!this.node[rightChildIndex]) {
      if (this.node[minimum] > this.node[leftChildIndex]) {
        minimum = leftChildIndex;
      }
    }
    if (this.node[leftChildIndex] < this.node[rightChildIndex]) {
      if (
        leftChildIndex <= this.node.length &&
        this.node[minimum] > this.node[leftChildIndex]
      ) {
        minimum = leftChildIndex;
      }
    } else {
      if (
        rightChildIndex <= this.node.length &&
        this.node[minimum] > this.node[rightChildIndex]
      ) {
        minimum = rightChildIndex;
      }
    }
    if (minimum !== index) {
      const t = this.node[index];
      this.node[index] = this.node[minimum];
      this.node[minimum] = t;
      this.bubbleDown(minimum);
    }
  }
}

const heap = new MinHeap();
let answer = [];
for (const a of num) {
  if (a === 0) {
    if (heap.node.length === 0) {
      answer.push(0);
    } else {
      answer.push(heap.extract());
    }
  } else {
    heap.enqueue(a);
  }
}
console.log(answer.join("\n"));
