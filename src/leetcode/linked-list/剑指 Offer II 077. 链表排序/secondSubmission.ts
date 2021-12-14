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
 * 思路：遍历链表，将值存入map中，排序map的keys()值
 * 然后重新构造链表
 */
export function sortList(head: ListNode | null): ListNode | null {
  const map = new Map<number, number>();
  let currentNode = head;
  while (currentNode !== null) {
    if (map.has(currentNode.val)) {
      map.set(currentNode.val, map.get(currentNode.val)! + 1);
    } else {
      map.set(currentNode.val, 1);
    }
    currentNode = currentNode.next;
  }
  const keys = [...map.keys()].sort((a, b) => a - b);
  const result = new ListNode(0, null);
  let traverse: any = result;
  keys.forEach(key => {
    const value = map.get(key) as number;
    for (let i = 0; i < value; i++) {
      traverse.next = new ListNode();
      traverse = traverse.next;
      traverse.val = key;
    }
  });


  return result.next;
}
