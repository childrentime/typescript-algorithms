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

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const dummyHead = new ListNode(0);
  let current = dummyHead;
  let carry = 0;
  while (l1 && l2) {
    let sum = l1.val + l2.val + carry;
    if (sum >= 10) {
      sum -= 10;
      carry = 1;
    } else {
      carry = 0;
    }
    const node = new ListNode(sum);
    current.next = node;
    current = current.next;
    l1 = l1.next;
    l2 = l2.next;
  }
  while (l1) {
    let sum = l1.val + carry;
    if (sum >= 10) {
      sum -= 10;
      carry = 1;
    } else {
      carry = 0;
    }
    const node = new ListNode(sum);
    current.next = node;
    current = current.next;
    l1 = l1.next;
  }
  while (l2) {
    let sum = l2.val + carry;
    if (sum >= 10) {
      sum -= 10;
      carry = 1;
    } else {
      carry = 0;
    }
    const node = new ListNode(sum);
    current.next = node;
    current = current.next;
    l2 = l2.next;
  }
  if (carry) {
    const node = new ListNode(1);
    current.next = node;
  }
  return dummyHead.next;
}
