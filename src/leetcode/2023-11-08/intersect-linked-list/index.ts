import ListNode from '../../hot 100/141. Linked List Cycle/ListNode';

export function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  const set = new Set<ListNode>();
  while (headA !== null) {
    set.add(headA);
    headA = headA.next;
  }

  while (headB !== null) {
    if (set.has(headB)) {
      return headB;
    }
    headB = headB.next;
  }

  return null;
}
