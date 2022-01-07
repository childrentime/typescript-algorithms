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

export function removeNthFromEnd(
  head: ListNode | null,
  n: number
): ListNode | null {
  let current = head;
  let len = 0;
  while (current) {
    len++;
    current = current.next;
  }
  let value = len - n;
  current = head;
  if (value === 0) {
    current = current!.next;
    return current;
  }
  while (current) {
    value--;
    if (value === 0) {
      current.next = current.next!.next;
      break;
    } else {
      current = current.next;
    }
  }

  return head;
}
