/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     next: Node | null
 *     random: Node | null
 *     constructor(val?: number, next?: Node, random?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

import Node from './ListNode';
export function copyRandomList(head: Node | null): Node | null {
  if (head === null) {
    return null;
  }
  for (let node: any = head; node !== null; node = node.next.next) {
    const nodeNew = new Node(node.val, node.next);
    node.next = nodeNew;
  }
  for (let node: any = head; node !== null; node = node.next.next) {
    const nodeNew = node.next;
    nodeNew.random = node.random !== null ? node.random.next : null;
  }
  const headNew = head.next;
  for (let node: any = head; node !== null; node = node.next) {
    const nodeNew = node.next;
    node.next = node.next.next;
    nodeNew.next = nodeNew.next !== null ? nodeNew.next.next : null;
  }
  return headNew;
}
