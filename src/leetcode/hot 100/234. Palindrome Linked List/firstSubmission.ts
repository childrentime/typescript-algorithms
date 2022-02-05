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

export function isPalindrome(head: ListNode | null): boolean {
  let fast = head;
  if (!fast || !fast.next) {
    return true;
  }
  let slow = head;
  let prev = null;
  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    const tem = slow!.next;
    slow!.next = prev;
    prev = slow;
    slow = tem;
  }
  if (fast.next) {
    if (slow!.val !== slow!.next!.val) {
      return false;
    } else {
      slow = slow!.next!.next;
    }
  } else {
    slow = slow!.next;
  }

  while (slow) {
    if (slow.val !== prev!.val) {
      return false;
    }
    slow = slow!.next;
    prev = prev!.next;
  }

  return true;
}
