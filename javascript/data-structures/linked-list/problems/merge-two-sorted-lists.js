/**
 * Merge Two Sorted Lists
 * 
 * You are given the heads of two sorted linked lists list1 and list2.
 * Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
 * Return the head of the merged linked list.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let head = { next: null };
  let temp = head;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      temp.next = list1;
      list1 = list1.next;
    } else {
      temp.next = list2;
      list2 = list2.next;
    }
    temp = temp.next;
  }

  if (list1) {
    temp.next = list1;
  }
  if (list2) {
    temp.next = list2;
  }

  return head.next;
};

const LinkedList = require("../implementation");
const ll = new LinkedList();
const ll2 = new LinkedList();
ll.add(1);
ll2.add(2);
ll.add(3);
ll2.add(4);
ll.add(5);
console.log(mergeTwoLists(ll.head, ll2.head));