import ListNode from './ListNode';

export function removeNthFromEnd(
  head: ListNode | null,
  n: number
): ListNode | null {
  let fast = head;
  let dummyHead = new ListNode(0, head);
  let slow = dummyHead;
  while (n) {
    fast = fast!.next;
    n--;
  }
  while (fast) {
    fast = fast.next;
    slow = slow!.next!;
  }
  slow!.next = slow!.next!.next;
  return dummyHead.next;
}
