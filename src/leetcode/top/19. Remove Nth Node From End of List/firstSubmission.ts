import ListNode from './ListNode';

export function removeNthFromEnd(
  head: ListNode | null,
  n: number
): ListNode | null {
  if (!head) {
    return null;
  }
  const dummyHead = new ListNode(0, head);
  let fast: ListNode | null = head;
  let slow: ListNode | null = dummyHead;
  while (n) {
    fast = fast!.next;
    n--;
  }
  while (fast) {
    fast = fast.next;
    slow = slow!.next;
  }
  slow!.next = slow!.next!.next;
  return dummyHead.next;
}
