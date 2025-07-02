import ListNode from '../hot 100/141. Linked List Cycle/ListNode';

export function isPalindrome(head: ListNode | null): boolean {
  let fast: ListNode | null = head;
  let slow: ListNode | null = head;
  while (fast?.next && fast?.next?.next) {
    fast = fast.next;
    fast = fast?.next ?? null;
    slow = slow?.next ?? null;
  }
  let next = slow?.next ?? null;
  let prev: ListNode | null = null;
  let curr: ListNode | null = head;
  while (curr && prev !== slow) {
    const next: ListNode | null = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  while (prev) {
    if (prev.val !== next?.val) {
      return false;
    }
    prev = prev.next;
    next = next.next;
  }
  return true;
}
