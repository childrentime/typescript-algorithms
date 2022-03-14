import ListNode from './ListNode';

export function detectCycle(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return null;
  }
  let fast = head;
  let slow = head;
  while (fast && slow) {
    if (fast.next) {
      fast.next = fast.next.next;
    } else {
      return null;
    }
    slow = slow.next!;
    if (slow === fast) {
      break;
    }
  }
  if (!fast) {
    return null;
  }
  slow = head;
  while (fast !== slow) {
    fast = fast.next!;
    slow = slow.next!;
  }
  return slow;
}
