import ListNode from '../../hot 100/141. Linked List Cycle/ListNode';

export default function reverseList(head: ListNode | null): ListNode | null {
  let prev = null;
  let cur = head;

  while (cur) {
    const next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }

  return prev;
}
