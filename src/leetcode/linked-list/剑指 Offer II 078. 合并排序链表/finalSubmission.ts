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
import PriorityQueue from '../../../data-structures/priority-queue/PriorityQueue';

export function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (lists.length === 0) return null;
  const queue = new PriorityQueue<ListNode>(
    10010,
    (a: ListNode, b: ListNode) => {
      return a.val - b.val;
    }
  );
  for (let list of lists) {
    while (list) {
      queue.add(list);
      list = list.next;
    }
  }
  let head = queue.poll();
  let node = head;
  while (!queue.empty()) {
    node!.next = queue.poll();
    node = node!.next;
  }

  // 可能有环
  if (node) {
    node.next = null;
  }

  return head;
}
