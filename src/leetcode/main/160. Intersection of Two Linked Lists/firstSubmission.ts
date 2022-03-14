import ListNode from './ListNode';

export function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  if (!headA) {
    return null;
  }
  if (!headB) {
    return null;
  }
  let p1: ListNode | null = headA;
  let p2: ListNode | null = headB;
  while (p1 !== p2) {
    p1 = p1 !== null ? p1.next : headB;
    p2 = p2 !== null ? p2.next : headA;
  }
  return p1;
}
