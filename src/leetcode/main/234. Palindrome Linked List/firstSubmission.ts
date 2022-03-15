import ListNode from './ListNode';

export function isPalindrome(head: ListNode | null): boolean {
  if (!head) {
    return true;
  }
  let fast: ListNode | null = head;
  let slow: ListNode = head;
  let pre: ListNode | null = null;
  while (fast && fast.next) {
    fast = fast.next.next;
    const next = slow.next!;
    slow.next = pre;
    pre = slow;
    slow = next;
  }
  if (fast) {
    slow = slow.next!;
  }
  while (slow) {
    if (slow.val !== pre!.val) {
      return false;
    }
    slow = slow.next!;
    pre = pre!.next!;
  }
  return true;
}
