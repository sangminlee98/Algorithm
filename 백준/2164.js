const input = +require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .shift();
let arr = Array.from({ length: input }, (_, i) => i + 1);
class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.rear = null;
    this.size = 0;
  }
  add(item) {
    const node = new Node(item);
    if (this.size === 0) {
      this.head = node;
    } else {
      this.rear.next = node;
      node.prev = this.rear;
    }
    this.rear = node;
    this.size++;
  }
  remove() {
    if (this.size === 0) {
      return null;
    } else {
      const item = this.head.value;
      this.head = this.head.next;
      if (this.head !== null) this.head.prev = null;
      this.size--;
      return item;
    }
  }
}
const ll = new LinkedList();
arr.forEach((item) => ll.add(item));
while (true) {
  if (ll.size === 1) {
    console.log(ll.remove());
    break;
  } else {
    ll.remove();
    let item = ll.remove();
    ll.add(item);
  }
}
