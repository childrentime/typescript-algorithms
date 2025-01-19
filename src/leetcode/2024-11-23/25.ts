import ListNode from '../hot 100/141. Linked List Cycle/ListNode';

export function reverseKGroup(
  head: ListNode | null,
  k: number
): ListNode | null {
  if (!head) {
    return null;
  }
  let curr: ListNode = head;
  let nextHead: ListNode | null = head;

  for (let i = 0; i < k; i++) {
    if (!nextHead) {
      return head;
    }
    nextHead = nextHead.next;
  }

  let prev = null;
  for (let i = 0; i < k; i++) {
    const next = curr.next ?? null;
    curr.next = prev;
    prev = curr;
    curr = next as ListNode;
  }

  head.next = reverseKGroup(nextHead, k);

  return prev;
}
