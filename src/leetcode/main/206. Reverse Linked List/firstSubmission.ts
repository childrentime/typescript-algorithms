import ListNode from './ListNode';

export function reverseList(head: ListNode | null): ListNode | null {
  let prev = null;
  while (head) {
    const next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
}
