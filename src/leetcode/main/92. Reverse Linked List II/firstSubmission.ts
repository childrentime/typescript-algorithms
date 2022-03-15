import ListNode from './ListNode';

export function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  let preHead = new ListNode(0, head);
  let pos = 0;
  let current = preHead;
  while (pos < left - 1) {
    current = current.next!;
    pos++;
  }
  let pre = null;
  let cur = current.next!;
  while (pos < right) {
    const next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next!;
    pos++;
  }
  current.next!.next = cur;
  current.next = pre;
  return preHead.next;
}
