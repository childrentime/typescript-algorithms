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

export function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  let dummyHead = new ListNode(0, null);
  let current: ListNode | null = dummyHead;
  while (current) {
    let minNumber = -1;
    let i = 0;
    let min = 100000;
    while (i < lists.length) {
      if (lists[i] ) {
        if (min > lists[i]!.val) {
          min = lists[i]!.val;
          minNumber = i;
        }
      }
      i++;
    }
    if(minNumber === -1){
      current = current.next;
      break;
    }
    lists[minNumber] = lists[minNumber]!.next;
    current.next = new ListNode(min, null);
    current = current.next;
  }

  return dummyHead.next;
}
