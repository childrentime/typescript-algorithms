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

export function hasCycle(head: ListNode | null): boolean {
  if (!head) {
    return false;
  }
  let slow = head;
  let fast = head;
  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next!;
    if (slow === fast) {
      return true;
    }
  }
  return false;
}
