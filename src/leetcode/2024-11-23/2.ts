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

import ListNode from '../hot 100/160. Intersection of Two Linked Lists/ListNode';

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let carry = 0;
  let result = new ListNode();
  let current = result;
  while (l1 || l2 || carry) {
    const v1 = l1?.val ?? 0;
    const v2 = l2?.val ?? 0;
    let num = v1 + v2 + carry;
    if (num >= 10) {
      carry = 1;
      num = num - 10;
    } else {
      carry = 0;
    }
    l1 = l1?.next ?? null;
    l2 = l2?.next ?? null;
    current.next = new ListNode(num);
    current = current.next;
  }
  return result.next;
}
