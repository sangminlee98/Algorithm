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
  enqueue(data) {
    this.node.push(data);
    this.bubbleUp();
  }
  bubbleUp(index = this.node.length - 1) {
    if (index < 1) return;
    const parentNodeIndex = Math.floor((index - 1) / 2);
    if (this.node[parentNodeIndex] > this.node[index]) {
      let tmp = this.node[index];
      this.node[index] = this.node[parentNodeIndex];
      this.node[parentNodeIndex] = tmp;
      index = parentNodeIndex;
      this.bubbleUp(index);
    } else return;
  }
  extract() {
    const min = this.node[0];
    if (this.node.length === 1) {
      this.node.pop();
      return min;
    } else {
      this.node[0] = this.node.pop();
      this.sinkDown();
      return min;
    }
  }
  sinkDown(index = 0) {
    const leftChildIndex = index * 2 + 1;
    const rightChildIndex = index * 2 + 2;
    let minimum = index;
    if (!this.node[leftChildIndex] && !this.node[rightChildIndex]) return;
    if (!this.node[rightChildIndex]) {
      if (this.node[leftChildIndex] < this.node[minimum]) {
        minimum = leftChildIndex;
      }
    }
    if (this.node[leftChildIndex] > this.node[rightChildIndex]) {
      if (
        rightChildIndex <= this.node.length &&
        this.node[rightChildIndex] < this.node[minimum]
      ) {
        minimum = rightChildIndex;
      }
    } else {
      if (
        leftChildIndex <= this.node.length &&
        this.node[leftChildIndex] < this.node[minimum]
      ) {
        minimum = leftChildIndex;
      }
    }
    if (minimum !== index) {
      const t = this.node[minimum];
      this.node[minimum] = this.node[index];
      this.node[index] = t;
      this.sinkDown(minimum);
    }
  }
}

const heap = new MinHeap();
let answer = "";
num.forEach((item) => {
  if (item !== 0) {
    heap.enqueue(item);
  } else {
    if (heap.node.length === 0) {
      answer += "0\n";
    } else {
      answer += `${heap.extract()}\n`;
    }
  }
});
console.log(answer.trim());
