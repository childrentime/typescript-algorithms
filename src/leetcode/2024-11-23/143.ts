import ListNode from '../hot 100/141. Linked List Cycle/ListNode';

export function reorderList(head: ListNode | null): void {
  const list: ListNode[] = [];
  while (head) {
    list.push(head);
    head = head.next;
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
