/**
 * You are given the head of a singly linked-list. The list can be represented as:
 * L0 → L1 → … → Ln - 1 → Ln
 * Reorder the list to be on the following form:
 * L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
 * You may not modify the values in the list's nodes. Only nodes themselves may be changed.
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let secondHalf = reverseList(slow.next);
  slow.next = null;
  let firstHalf = head;

  while (firstHalf && secondHalf) {
    let temp1 = firstHalf.next;
    firstHalf.next = secondHalf;
    let temp2 = secondHalf.next;
    secondHalf.next = temp1;
    firstHalf = temp1;
    secondHalf = temp2;
  }
  return head;
};

function reverseList(list) {
  let prev = null;
  let curr = list;

  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}


const LinkedList = require("../implementation");
const ll = new LinkedList();
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
ll.add(5);
console.log(reorderList(ll.head));