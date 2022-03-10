import ListNode from './ListNode';

export function oddEvenList(head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }
  let even = head.next;
  let odd = head;
  const evenHead = even;
  while (even && even.next) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
  }
  odd.next = evenHead;
  return head;
}
