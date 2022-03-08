import ListNode from './ListNode';

export function deleteNode(root: ListNode | null): void {
  root!.val = root!.next!.val;
  root!.next = root!.next!.next;
}
