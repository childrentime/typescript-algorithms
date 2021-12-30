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
 * 逆序相加 直接从最初的链表节点开始相加 记录进位
 */
export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let dummyHead = new ListNode();
  let prev = dummyHead;
  let current1 = l1;
  let current2 = l2;
  let carry = 0;
  while (current1 && current2) {
    let tem;
    let sum = current1.val + current2.val + carry;
    if (sum >= 10) {
      carry = 1;
      tem = sum - 10;
    } else {
      carry = 0;
      tem = sum;
    }
    let newNode = new ListNode(tem);
    prev.next = newNode;
    prev = prev.next;
    current1 = current1.next;
    current2 = current2.next;
  }
  while (current1) {
    let tem;
    let sum = current1.val + carry;
    if (sum >= 10) {
      carry = 1;
      tem = sum - 10;
    } else {
      carry = 0;
      tem = sum;
    }
    let newNode = new ListNode(tem);
    prev.next = newNode;
    prev = prev.next;
    current1 = current1.next;
  }

  while (current2) {
    let tem;
    let sum = current2.val + carry;
    if (sum >= 10) {
      carry = 1;
      tem = sum - 10;
    } else {
      carry = 0;
      tem = sum;
    }
    let newNode = new ListNode(tem);
    prev.next = newNode;
    prev = prev.next;
    current2 = current2.next;
  }

  if (carry === 1) {
    let newNode = new ListNode(carry, null);
    prev.next = newNode;
    prev = prev.next;
  }

  return dummyHead.next;
}
