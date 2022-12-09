/**
 * Intersection of Two Linked Lists
 * 
 * Given the heads of two singly linked-lists headA and headB, 
 * return the node at which the two lists intersect.
 * If the two linked lists have no intersection at all, return null.
 */


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let aLen = getListLength(headA);
  let bLen = getListLength(headB);
  let diff = Math.abs(aLen - bLen);
  let a = headA;
  let b = headB;
  if (aLen > bLen) {
    while (diff) {
      a = a.next;
      diff--;
    }
  } else {
    while (diff) {
      b = b.next;
      diff--;
    }
  }

  while (a !== b) {
    a = a.next;
    b = b.next;
    if (!a || !b) {
      return null;
    }
  }
  return a;
};

function getListLength(head) {
  let cur = head;
  let length = 0;
  while (cur) {
    length++;
    cur = cur.next;
  }
  return length;
}

