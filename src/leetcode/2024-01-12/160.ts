/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

import ListNode from '../hot 100/141. Linked List Cycle/ListNode';

export function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  let p1 = headA;
  let p2 = headB;
  let p1f = false;
  let p2f = false;
  let result = true;
  while (p1 !== p2) {
    if (p1?.next) {
      p1 = p1.next;
    } else {
      if (!p1f) {
        p1 = headB;
        p1f = true;
      } else {
        result = false;
        break;
      }
    }
    if (p2?.next) {
      p2 = p2.next;
    } else {
      if (!p2f) {
        p2 = headA;
        p2f = true;
      } else {
        result = false;
        break;
      }
    }
  }
  if (!result) {
    return null;
  }
  return p1;
}
