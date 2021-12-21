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
 * 转换为数组 判断数组是否回文
 */
export function isPalindrome(head: ListNode | null): boolean {
  const array = [];
  while (head) {
    array.push(head.val);
    head = head.next;
  }
  let flag = true;
  for (let i = 0; i < array.length - i - 1; i++) {
    if (array[i] !== array[array.length - i - 1]) {
      flag = false;
      break;
    }
  }
  return flag;
}
