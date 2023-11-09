import ListNode from '../../hot 100/141. Linked List Cycle/ListNode';

export default function hasCycle(head: ListNode | null): boolean {
  if (!head) {
    return false;
  }

  if (head.next === head) {
    return true;
  }
  let slow = head.next;
  let fast = head.next ? head.next.next : null;

  while (fast && slow !== fast) {
    slow = slow!.next!;
    fast = fast.next ? fast.next.next : null;
  }

  if (fast) {
    return true;
  } else {
    return false;
  }
}
