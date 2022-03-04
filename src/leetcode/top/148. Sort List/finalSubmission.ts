import ListNode from './ListNode';

export function sortList(head: ListNode | null): ListNode | null {
  let len = 0;
  let cur = head;
  while (cur) {
    len++;
    cur = cur.next;
  }

  const merge = (node1: ListNode | null, node2: ListNode | null) => {
    const dummyHead = new ListNode(0);
    let current = dummyHead;
    while (node1 && node2) {
      if (node1.val < node2.val) {
        current.next = node1;
        node1 = node1.next;
      } else {
        current.next = node2;
        node2 = node2.next;
      }
      current = current.next;
    }
    if (node1) {
      current.next = node1;
    }
    if (node2) {
      current.next = node2;
    }
    return dummyHead.next;
  };
  const dummyHead = new ListNode(0, head);
  for (let sub = 1; sub < len; sub <<= 1) {
    let prev = dummyHead;
    let current = dummyHead.next;
    while (current) {
      let head1 = current;
      for (let i = 1; i < sub && current.next; i++) {
        current = current.next;
      }

      let head2 = current.next;
      current.next = null;
      current = head2;
      for (let i = 1; i < sub && current && current.next; i++) {
        current = current.next;
      }

      let next = null;
      if (current) {
        next = current.next;
        current.next = null;
      }

      const merged = merge(head1, head2);
      prev.next = merged;
      while (prev.next) {
        prev = prev.next;
      }

      current = next;
    }
  }
  return dummyHead.next;
}
