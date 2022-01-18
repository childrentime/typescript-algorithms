import ListNode from './ListNode';

export function hasCycle(head: ListNode | null): boolean {
  let count = 0;
  while (head) {
    head = head.next;
    count++;
    if (count > 10000) {
      return true;
    }
  }
  return false;
}
