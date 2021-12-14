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
 * https://leetcode-cn.com/problems/7WHec2/
 * 最适合链表的排序算法是归并排序。
 * 首先求链表长度n，然后将链表拆分为子链表进行排序
 * 1. 用 sublength 表示需要排序的子链表的长度，初始时 sublength = 1
 * 2. 每次将链表拆分为若干个长度为 sublength的 子链表 最后一个子链表长度可以小于 sublength
 * 3. 将sublength 值加倍，重复第二步，对更长的有序子链表进行排序，直到链表有序
 */
export function sortList(head: ListNode | null): ListNode | null {
  if (head === null) {
    return null;
  }
  let length = 0;
  let node: ListNode | null = head;
  while (node) {
    length++;
    node = node.next;
  }
  const dummyHead = new ListNode(0, head);
  // 归并排序 begin
  for (let sublength = 1; sublength < length; sublength <<= 1) {
    let prev = dummyHead,
      current = dummyHead.next;
    while (current) {
      let head1 = current;
      for (let i = 1; i < sublength && current.next; i++) {
        current = current.next;
      }

      //head2部分也需要 sublength
      let head2 = current.next;
      //断开head1 head2
      current.next = null;
      // 右移指针
      current = head2;

      for (let i = 1; i < sublength && current && current.next; i++) {
        current = current.next;
      }

      //断开head2和后面的连接 保存next指针
      let next = null;
      if (current) {
        next = current.next;
        current.next = null;
      }

      // 合并后的链表头部
      const merged = merge(head1, head2);
      // prev连接到链表头部
      prev.next = merged;
      // prev 继续连接
      while (prev.next !== null) {
        prev = prev.next;
      }

      //恢复next指针
      current = next;
    }
  }
  return dummyHead.next;
}

/*
 * 合并两个子链表
 */
export const merge = (head1: ListNode | null, head2: ListNode | null) => {
  const dummyHead = new ListNode(0, null);
  let temp = dummyHead,
    temp1 = head1,
    temp2 = head2;
  while (temp1 && temp2) {
    if (temp1.val <= temp2.val) {
      temp.next = temp1;
      temp1 = temp1.next;
    } else {
      temp.next = temp2;
      temp2 = temp2.next;
    }
    temp = temp.next;
  }
  if (temp1) {
    temp.next = temp1;
  } else if (temp2) {
    temp.next = temp2;
  }
  return dummyHead.next;
};
