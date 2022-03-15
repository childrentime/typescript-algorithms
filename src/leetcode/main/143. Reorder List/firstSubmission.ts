import ListNode from './ListNode';

export function reorderList(head: ListNode | null): void {
  if (!head) {
    return;
  }
  const list: ListNode[] = [];
  let current: ListNode | null = head;
  while (current) {
    list.push(current);
    current = current.next;
  }
  let i = 0;
  let j = list.length - 1;
  while (i < j) {
    list[i]!.next = list[j]!;
    i++;
    list[j]!.next = list[i]!;
    j--;
  }
  list[i]!.next = null;
}
