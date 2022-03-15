import ListNode from './ListNode';

export function swapPairs(head: ListNode | null): ListNode | null {
  let pre = null;
  let cur = head;
  let p = head;
  for (let i = 0; i < 2; i++) {
    if (!p) {
      return head;
    }
    p = p.next;
  }
  for (let i = 0; i < 2; i++) {
    const next = cur!.next;
    cur!.next = pre;
    pre = cur;
    cur = next;
  }
  head!.next = swapPairs(cur);
  return pre;
}
