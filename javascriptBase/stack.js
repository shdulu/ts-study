class Stack {
  items = [];
  push(ele) {
    this.items.push(ele);
  }
  pop() {
    return this.items.pop();
  }
}

let stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
console.log(stack.pop())
console.log(stack.items)