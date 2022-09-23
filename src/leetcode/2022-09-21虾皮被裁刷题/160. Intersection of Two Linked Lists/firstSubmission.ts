import ListNode from '../../hot 100/141. Linked List Cycle/ListNode';

export default function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  if (!headA) {
    return null;
  }

  if (!headB) {
    return null;
  }

  let p1 = headA;
  let p2 = headB;

  while (p1 != p2) {
    p1 = p1.next !== null ? p1.next : headB;
    p2 = p2.next !== null ? p2.next : headA;
  }

  return p1;
}
