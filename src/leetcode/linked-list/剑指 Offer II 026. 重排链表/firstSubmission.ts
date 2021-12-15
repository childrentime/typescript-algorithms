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
 * 思路：遍历链表，将尾节点插入头节点之后，再遍历之后的链表
 */
export default function reorderList(head: ListNode | null): void {
  let prev = new ListNode(0,head)
  while(prev.next){
    let current = prev.next;
    if(current.next === null){
      break;
    }

    // head
    let head = current;

    while(current.next?.next){
      current = current.next;
    }

    // tail
    let tail = current.next!;

    // 断开尾部
    current.next = null;

    // 保存剩余链表
    let rest = head.next;

    // merge头尾
    head.next = tail;

    // 使得prev走到尾部
    while(prev.next){
      prev = prev.next;
    }

    // 尾部后面接上剩余链表
    tail.next = rest
  }
}
