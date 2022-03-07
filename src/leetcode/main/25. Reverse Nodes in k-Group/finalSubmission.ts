import ListNode from './ListNode';

export function reverseKGroup(
  head: ListNode | null,
  k: number
): ListNode | null {
  if (!head) {
    return null;
  }
  const dummyHead = new ListNode(0, head);
  let pre = dummyHead;

  const reverse = (head: ListNode, tail: ListNode): [ListNode, ListNode] => {
    let prev = tail.next;
    let p: ListNode | null = head;
    while (prev !== tail) {
      const next: ListNode | null = p!.next;
      p!.next = prev;
      prev = p;
      p = next;
    }
    return [tail, head];
  };
  while (head) {
    let tail: ListNode | null = pre;
    for (let i = 0; i < k; i++) {
      tail = tail!.next;
      if (!tail) {
        return dummyHead.next;
      }
    }
    const next = tail!.next;
    [head, tail] = reverse(head, tail);
    pre.next = head;
    tail.next = next;
    pre = tail;
    head = tail.next;
  }
  return dummyHead.next;
}
