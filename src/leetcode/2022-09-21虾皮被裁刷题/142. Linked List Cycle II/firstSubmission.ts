import ListNode from '../../hot 100/141. Linked List Cycle/ListNode';

export default function detectCycle(head: ListNode | null): ListNode | null {
  let slow = head;
  let fast = head;

  while (slow && fast) {
    if (fast.next) {
      fast = fast.next.next;
    } else {
      return null;
    }

    slow = slow.next;
    if (fast === slow) {
      break;
    }
  }

  if (fast === slow) {
    slow = head;
    while (slow !== fast) {
      slow = slow!.next;
      fast = fast!.next;
    }
    return slow;
  }

  return null;
}
