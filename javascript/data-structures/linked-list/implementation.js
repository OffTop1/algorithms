class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(element) {
        const node = new Node(element);
        if(this.head === null) {
            this.head = node;
        } else {
            let current = this.head
            while(current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    insertAt(element, index) {
        if(index < 0 || index > size) {
            return console.log("Please enter a valid index");
        }
        const node = new Node(element);
        if(index === 0) {
            node.next = this.head;
            this.head = node;
        } else {
            let current = this.head;
            let previous = null;
            let iterator = 0;
            while(iterator < index) {
                iterator++;
                previous = current;
                current = current.next;
            }
            node.next = current;
            previous.next = node;
        }
    }

    removeFrom(index) {
        if(index < 0 || index > this.size) {
            return console.log("Please enter a valid index");
        }
        let current = this.head;
        if(index === 0) {
            this.head = current.next;
        } else {
            let previous = null;
            let iterator = 0;
            while(iterator < index) {
                iterator++;
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.size--;
        return current.element;
    }

    removeElement(element) {
        let current = this.head;
        let previous = null;
        while(current !== null) {
            if(current.element === element) {
                if(previous === null) {
                    this.head = current.next;
                } else {
                    previous.next = current.next;
                }
                this.size--;
                return current.element;
            }
            previous = current;
            current = current.next;
        }
        return -1;
    }

    indexOf(element) {
        let current = this.head;
        let iterator = 0;
        while(current !== null) {
            if(current.element === element) {
                return iterator;
            }
            current = current.next;
            iterator++;
        }
        return -1;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }
}

module.exports = LinkedList;