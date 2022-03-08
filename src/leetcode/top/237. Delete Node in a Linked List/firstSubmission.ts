import ListNode from './ListNode';

export function deleteNode(root: ListNode | null): void {
  let prev = root;
  while (root && root.next) {
    const next = root.next;
    root.val = next.val;
    prev = root;
    root = root.next;
  }
  prev!.next = null;
}
