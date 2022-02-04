import ListNode from './ListNode';

export function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  if (!headA || !headB) {
    return null;
  }
  let pointA: ListNode | null = headA;
  let pointB: ListNode | null = headB;
  while (pointA !== pointB) {
    pointA = pointA ? pointA.next : headB;
    pointB = pointB ? pointB.next : headA;
  }

  return pointA;
}
