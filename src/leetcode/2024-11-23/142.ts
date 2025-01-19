import ListNode from '../hot 100/141. Linked List Cycle/ListNode';

export function detectCycle(head: ListNode | null): ListNode | null {
  let slow = head;
  let fast = head;

  do {
    slow = slow?.next ?? null;
    fast = fast?.next?.next ?? null;
  } while (slow !== fast);

  slow = head;
  while (slow !== fast) {
    slow = slow?.next ?? null;
    fast = fast?.next ?? null;
  }

  return slow;
}
