import ListNode from './ListNode';

export function hasCycle(head: ListNode | null): boolean {
  let fast = head;
  let slow = head;
  if (!head || !head.next) {
    return true;
  }
  while (fast && slow) {
    if (fast.next) {
      fast = fast.next.next;
    } else {
      fast = fast.next;
    }
    slow = slow.next;
    if (fast === slow) {
      return true;
    }
  }
  return false;
}
