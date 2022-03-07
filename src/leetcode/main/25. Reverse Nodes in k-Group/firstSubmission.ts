import ListNode from './ListNode';

export function reverseKGroup(
  head: ListNode | null,
  k: number
): ListNode | null {
  if (!head) {
    return null;
  }
  const dummyHead = new ListNode(0);
  let current = dummyHead;
  const stack: ListNode[] = [];
  while (head) {
    let time = k;
    while (time && head) {
      stack.push(head);
      time--;
      head = head.next;
    }
    if (time !== 0) {
      while (stack.length) {
        current.next = stack.shift()!;
        current = current.next;
      }
    } else {
      while (stack.length) {
        current.next = stack.pop()!;
        current = current.next;
      }
    }
  }
  current.next = null;
  return dummyHead.next;
}
