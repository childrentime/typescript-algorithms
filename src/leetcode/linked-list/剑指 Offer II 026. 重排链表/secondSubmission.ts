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

/*
 * Do not return anything, modify head in-place instead.
 * 思路：将链表转换为数组 再将数组转换为链表
 */
export default function reorderList(head: ListNode | null): void {
  const array = [];
  let current = head;
  while (current) {
    array.push(current.val);
    current = current.next;
  }
  if (array.length <= 1) {
    return;
  }
  current = head;
  let i = 0;
  for (; i < array.length - i - 1; i++) {
    if (i !== 0) {
      const node = new ListNode(array[i], null);
      current!.next = node;
      current = current!.next;
    }
    const secnondNode = new ListNode(array[array.length - i - 1], null);
    current!.next = secnondNode;
    current = current!.next;
  }
  if (array.length % 2 !== 0) {
    const node = new ListNode(array[i], null);
    current!.next = node;
    current = current!.next;
  }
}
