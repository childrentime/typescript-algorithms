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

class PQ {
  private arr: number[] = [];

  private swim(): void {
    let n = this.arr.length - 1;
    const item = this.arr[n]!;
    while (n > 0) {
      const parent = (n - 1) >>> 1;
      if (item > this.arr[parent]!) {
        break;
      }
      this.arr[n] = this.arr[parent]!;
      n = parent;
    }
    this.arr[n] = item;
  }

  // 小于一半长度
  private sink() {
    let n = 0;
    const item = this.arr[n]!;
    let size = this.arr.length >>> 1;
    while (n < size) {
      let child = (n << 1) + 1;
      let childItem = this.arr[child]!;
      let right = child + 1;
      if (right < this.arr.length && this.arr[right]! < childItem) {
        childItem = this.arr[(child = right)]!;
      }
      if (childItem > item) {
        break;
      }
      this.arr[n] = childItem;
      n = child;
    }
    this.arr[n] = item;
  }

  public add(val: number) {
    this.arr.push(val);
    this.swim();
  }

  public remove(): number {
    const result = this.arr[0]!;
    if (this.arr.length === 1) {
      return result;
    }
    this.arr[0] = this.arr.pop()!;
    this.sink();
    return result;
  }

  public isEmpty(): boolean {
    return this.arr.length === 0;
  }
}
export function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  const pq = new PQ();
  for (let list of lists) {
    while (list) {
      pq.add(list.val);
      list = list.next;
    }
  }
  const root = new ListNode(0);
  let current = root;
  while (!pq.isEmpty()) {
    const newNode = new ListNode(pq.remove());
    current.next = newNode;
    current = current.next;
  }
  return root.next;
}
