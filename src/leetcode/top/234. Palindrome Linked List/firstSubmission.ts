import ListNode from './ListNode';

export function isPalindrome(head: ListNode | null): boolean {
  if (!head || !head.next) {
    return true;
  }
  let fast: ListNode | null = head;
  let slow = head;
  let prev: ListNode | null = null;
  while (fast && fast.next) {
    fast = fast.next.next;
    const next = slow.next!;
    slow.next = prev;
    prev = slow;
    slow = next;
  }
  if (!fast) {
    if (slow.val !== prev!.val) {
      return false;
    }
  } else {
    slow = slow.next!;
  }
  while (slow) {
    if (slow.val !== prev!.val) {
      return false;
    }
    slow = slow.next!;
    prev = prev!.next!;
  }
  return true;
}
