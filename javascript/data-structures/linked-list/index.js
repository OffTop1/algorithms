const LinkedList = require("./implementation");

let ll = new LinkedList();
console.log(ll.isEmpty());
ll.add(3);
ll.add(4);
ll.add(5);
ll.add(10);
ll.add(13);
ll.removeFrom(0);
ll.removeElement(4);
console.log(ll.getSize());
console.log(ll.indexOf(13));