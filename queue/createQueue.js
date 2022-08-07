/**
 * data: 队列
 * p: 入队指针
 * q: 出队指针
 * size: 当前队列大小
 * max: 队列最大容量
 */
class Queue {
  constructor(max = 5) {
    this.data = Array(max);
    this.p = 0;
    this.q = 0;
    this.size = 0;
    this.max = max;
  }
  enqueue(item) {
    if (this.size === this.max) throw "Queue Overflow";
    this.data[this.p++] = item;
    this.size++;
    if (this.p === this.max) this.p = 0;
  }
  dequeue() {
    if (this.size === 0) return "Queue Underflow";
    const item = this.data[this.q++];
    this.size--;
    if (this.q === this.max) this.q = 0;
    return item;
  }
  getData() {
    return this.data;
  }
}
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue());
queue.enqueue(4);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
console.log(queue.dequeue());
console.log(queue.getData());
