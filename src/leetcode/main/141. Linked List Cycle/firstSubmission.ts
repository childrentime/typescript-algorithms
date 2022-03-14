import ListNode from './ListNode';

export function hasCycle(head: ListNode | null): boolean {
  let slow = head;
  let fast = head;
  while (fast && slow) {
    if (fast.next) {
      fast = fast.next.next;
    } else {
      return false;
    }
    slow = slow.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
}
