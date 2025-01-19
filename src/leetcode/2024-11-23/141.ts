import ListNode from '../hot 100/141. Linked List Cycle/ListNode';

export function hasCycle(head: ListNode | null): boolean {
  const set = new Set<ListNode>();
  while (head) {
    if (set.has(head)) {
      return true;
    }
    set.add(head);
    head = head.next;
  }
  return false;
}
