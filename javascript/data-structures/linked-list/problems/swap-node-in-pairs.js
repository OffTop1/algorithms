/**
 * Swap Nodes in Pairs
 * 
 * Given a linked list, swap every two adjacent nodes and return its head. 
 * You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)
 */


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head || !head.next) {
    return head;
  }
  let hd = head.next;
  let prev = head;
  let cur = hd;

  while (true) {
    let next = cur.next;
    cur.next = prev;
    if (!next || !next.next) {
      prev.next = next;
      return hd;
    }
    prev.next = next.next;
    cur = next.next;
    prev = next;
  }
}

const LinkedList = require('../implementation');
const ll = new LinkedList();
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
ll.add(5);
console.log(swapPairs(ll.head));