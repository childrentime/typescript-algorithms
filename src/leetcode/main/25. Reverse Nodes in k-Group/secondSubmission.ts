import ListNode from './ListNode';

export function reverseKGroup(
  head: ListNode | null,
  k: number
): ListNode | null {
  let pre = null;
  let cur = head;
  let p = head;
  for (let i = 0; i < k; i++) {
    if (!p) {
      return head;
    }
    p = p.next;
  }
  for (let i = 0; i < k; i++) {
    const next = cur!.next;
    cur!.next = pre;
    pre = cur;
    cur = next;
  }
  head!.next = reverseKGroup(cur, k);
  return pre;
}
