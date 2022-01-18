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

import ListNode from './ListNode';

export function hasCycle(head: ListNode | null): boolean {
  const set = new Set();
  let current = head;
  while (current) {
    if (set.has(current)) {
      return true;
    }
    set.add(current);
    current = current.next;
  }

  return false;
}
