const Stack = require('./implementation');

const stack = new Stack();
stack.push(11);
stack.push(21);
stack.push(3);
stack.pop();
console.log(stack.peek());
stack.print();