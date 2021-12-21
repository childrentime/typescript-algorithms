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

/**
 * 快慢指针 找数组中点 慢指针找的同时反转链表
 */
export function isPalindrome(head: ListNode | null): boolean {
  let prev = null;
  let slow = head;
  let fast = head;
  if (!fast || !fast.next) {
    return true;
  }
  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    //反转
    let temp = slow!.next;
    slow!.next = prev;
    prev = slow;
    slow = temp;
  }
  if (fast.next !== null) {
    if (slow!.val !== slow!.next!.val) {
      return false;
    } else {
      slow = slow!.next!.next;
    }
  } else {
    slow = slow!.next;
  }
  while (prev) {
    if (prev.val !== slow!.val) {
      return false;
    }
    prev = prev.next;
    slow = slow!.next;
  }
  return true;
}
