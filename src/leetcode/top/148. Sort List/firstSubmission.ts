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

export function sortList(head: ListNode | null): ListNode | null {
  const arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  arr.sort((a, b) => a - b);
  let root = new ListNode();
  const answer = root;
  for (const a of arr) {
    const node = new ListNode(a);
    root.next = node;
    root = root.next;
  }
  return answer.next;
}
