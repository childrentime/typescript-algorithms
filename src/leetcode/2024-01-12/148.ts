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

// 将长链表分割为长度为5的短链表，然后对短链表进行插入排序，然后合并这些子列表。
// 或者直接分割+用数组合并两个无序链表
export function sortList(head: ListNode | null): ListNode | null {
  const array: number[] = [];
  while (head) {
    array.push(head.val);
    head = head.next;
  }
  array.sort((a, b) => a - b);
  let dummy = new ListNode();
  let curr = dummy;
  for (const n of array) {
    curr.next = new ListNode(n);
    curr = curr.next;
  }
  return dummy.next;
}
