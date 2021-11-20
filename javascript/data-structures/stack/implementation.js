
class Stack {
    constructor() {
        this.stack = [];
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    push(element) {
        this.stack.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error('Stack underflow');
        } else {
            return this.stack.pop();
        }
    }

    peek() {
        return this.stack[this.stack.length - 1];
    }
    
    print() {
        return console.log(this.stack);
    }
}

module.exports = Stack;