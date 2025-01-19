import ListNode from '../hot 100/141. Linked List Cycle/ListNode';

export function swapPairs(head: ListNode | null): ListNode | null {
  let prev = null;
  let cur = head;
  let p = head;
  for (let i = 0; i < 2; i++) {
    if (!p) {
      return head;
    }
    p = p.next;
  }

  for (let i = 0; i < 2; i++) {
    const next = cur?.next;
    cur!.next = prev;
    prev = cur;
    cur = next ?? null;
  }

  head!.next = swapPairs(cur);

  return prev;
}
