class Queue {
  // 先进先出,队尾插入队头删除
  items = [];
  enqueue(ele) {
    this.items.push(ele);
  }
  dequeue() {
    this.items.shift();
  }
}
let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue()); //1
