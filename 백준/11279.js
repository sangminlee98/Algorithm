const fs = require("fs");
const [_, ...input] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const num = input.map((v) => +v);

class MaxHeap {
  constructor() {
    this.node = [];
  }
  enqueue(num) {
    this.node.push(num);
    this.bubbleUp();
  }
  bubbleUp(index = this.node.length - 1) {
    const parentNode = Math.floor((index - 1) / 2);
    if (this.node[index] > this.node[parentNode]) {
      const tmp = this.node[index];
      this.node[index] = this.node[parentNode];
      this.node[parentNode] = tmp;
      this.bubbleUp(parentNode);
    }
  }
  extract() {
    const max = this.node[0];
    if (this.node.length === 0) console.log("err");
    if (this.node.length === 1) {
      this.node.pop();
      return max;
    }
    this.node[0] = this.node.pop();
    this.bubbleDown();
    return max;
  }
  bubbleDown(index = 0) {
    const leftChildIndex = index * 2 + 1;
    const rightChildIndex = index * 2 + 2;
    let maximum = index;
    if (!this.node[leftChildIndex] && !this.node[rightChildIndex]) return;
    if (!this.node[rightChildIndex]) {
      if (this.node[maximum] < this.node[leftChildIndex]) {
        maximum = leftChildIndex;
      }
    }
    if (this.node[leftChildIndex] > this.node[rightChildIndex]) {
      if (
        leftChildIndex <= this.node.length &&
        this.node[maximum] < this.node[leftChildIndex]
      ) {
        maximum = leftChildIndex;
      }
    } else {
      if (
        rightChildIndex <= this.node.length &&
        this.node[maximum] < this.node[rightChildIndex]
      ) {
        maximum = rightChildIndex;
      }
    }
    if (maximum !== index) {
      const tmp = this.node[index];
      this.node[index] = this.node[maximum];
      this.node[maximum] = tmp;
      this.bubbleDown(maximum);
    }
  }
}

const heap = new MaxHeap();
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
