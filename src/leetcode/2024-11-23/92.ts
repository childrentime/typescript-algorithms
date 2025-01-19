import ListNode from '../hot 100/141. Linked List Cycle/ListNode';

export function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  let dummy: ListNode | null = new ListNode(0, head);
  let beforeHead = dummy;
  let afterHead: ListNode | null = null;
  let beginHead: ListNode | null = null;
  let endHead: ListNode | null = null;
  while (left) {
    if (!beginHead) {
      beginHead = head;
    } else {
      beforeHead = beginHead;
      beginHead = beginHead.next;
    }
    left--;
  }
  while (right) {
    if (!endHead) {
      endHead = head;
    } else {
      endHead = endHead.next;
    }
    right--;
  }
  afterHead = endHead?.next ?? null;
  endHead!.next = null;
  const [begin, end] = reverse(beginHead as ListNode);
  beforeHead.next = begin;
  end.next = afterHead;
  return dummy.next;
}

function reverse(node: ListNode): [ListNode, ListNode] {
  let prev = null;
  let curr: ListNode | null = node;
  while (curr) {
    const next: ListNode | null = curr?.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return [prev as ListNode, node];
}
