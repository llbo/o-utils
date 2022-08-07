class Stack {
  constructor(max = 1000) {
    this.max = max;
    this.sp = -1;
    this.size = 0;
    this.data = Array(max);
  }
  push() {
    if (this.sp === this.max - 1) throw "Stack Overflow";
    this.data[++this.sp] = item;
    this.size++;
  }
  pop() {
    if (this.sp === -1) throw "Stack Underflow";
    const item = this.data[this.sp--];
    this.size--;
    return item;
  }
}
