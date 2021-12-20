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
 * 思路：找到链表的中点，反转右链表，进行合并
 */
export default function reorderList(head: ListNode | null): void {
  const middleNode = (head: ListNode): ListNode => {
    let slow = head;
    let fast = head;
    while (fast.next && fast.next.next) {
      slow = slow.next!;
      fast = fast.next.next;
    }
    return slow;
  };

  // 反转链表 反转链表的指向 并且保存第一个结点
  const reverseList = (head: ListNode | null): ListNode | null => {
    let prev = null;
    let current = head;
    while (current) {
      let temp = current.next;
      current.next = prev;
      prev = current;
      current = temp!;
    }
    return prev;
  };

  // 合并链表
  const merge = (head1: ListNode, head2: ListNode) => {
    let temp1;
    let temp2;
    while (head1 && head2) {
      temp1 = head1.next;
      temp2 = head2.next;

      head1.next = head2;
      head1 = temp1!;

      head2.next = head1;
      head2 = temp2!;
    }
  };
  if (!head?.next) {
    return;
  }
  const mid = middleNode(head);
  const l1 = head;
  let l2 = mid.next;
  mid.next = null;
  l2 = reverseList(l2);
  merge(l1, l2!);
}
