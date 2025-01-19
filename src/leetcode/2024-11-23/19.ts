import ListNode from '../hot 100/141. Linked List Cycle/ListNode';

export function removeNthFromEnd(
  head: ListNode | null,
  n: number
): ListNode | null {
  const dummy = new ListNode(0, head);
  let current = head;
  let length = 0;
  while (current) {
    length++;
    current = current.next;
  }
  let target = length - n;
  current = dummy;
  while (target > 0) {
    target--;
    current = current!.next;
  }
  current!.next = current!.next!.next;

  return dummy.next;
}
