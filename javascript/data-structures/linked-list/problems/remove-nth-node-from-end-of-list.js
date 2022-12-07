/**
 * Remove Nth Node From End of List
 * 
 * Given the head of a linked list, remove the nth node from the end of the list and return its head.
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let fast = head;
  let slow = head;

  for (let i = 0; i <= n; i++) {
    if (!fast) {
      head = head.next;
      return head;
    }
    fast = fast.next;
  }

  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;
  return head;
};

const LinkedList = require('../implementation');
const ll = new LinkedList();
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
console.log(removeNthFromEnd(ll.head, 2));