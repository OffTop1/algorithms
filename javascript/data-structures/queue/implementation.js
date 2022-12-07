class Queue {
  constructor(n) {
    this.queue = new Array(n);
    this.head = 0;
    this.tail = 0;
  }

  enqueue(x) {
    this.queue[this.tail] = x;
    if (this.tail === this.queue.length) {
      this.tail = 0;
    } else {
      this.tail++;
    }
  }

  dequeue() {
    const x = this.queue[this.head];
    if (x) {
      if (this.head === this.queue.length) {
        this.head = 0;
      } else {
        this.head++;
      }
      return x;
    } else {
      throw new Error('Queue underflow!');
    }
  }
}

const queue = new Queue(7);
queue.enqueue(11);
queue.enqueue(13);
queue.enqueue(19);
queue.enqueue(21);
console.log(queue.dequeue());