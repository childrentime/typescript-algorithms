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

import ListNode from "./ListNode";

/*
 * https://leetcode-cn.com/problems/7WHec2/
 * 思路：遍历链表，将值存入array中，利用array的sort方法进行排序
 * 再利用array构造链表
 */
export function sortList(head: ListNode | null): ListNode | null {
  let array: Array<number> = [];
  let currentNode = head;
  while (currentNode !== null) {
    array.push(currentNode.val);
    currentNode = currentNode.next;
  }
  array = array.sort((a, b) => a - b);
  if (array.length === 0) {
    return null;
  }
  const result = new ListNode();
  let traverse = result;
  for (let i = 0; i < array.length - 1; i++) {
    traverse.val = array[i] as number;
    traverse.next = new ListNode();
    traverse = traverse.next;
  }
  traverse.val = array[array.length - 1] as number;

  return result;
}
