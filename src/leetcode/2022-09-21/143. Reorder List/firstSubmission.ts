import ListNode from '../../hot 100/141. Linked List Cycle/ListNode';

export default function reorderList(head: ListNode | null): void {
  const findMiddle = (head: ListNode | null) => {
    if (!head) {
      return null;
    }

    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (fast && fast.next) {
      slow = slow!.next;
      fast = fast.next.next;
    }

    return slow;
  };

  const reverse = (head: ListNode | null) => {
    if (!head) {
      return null;
    }
    let prev = null;
    let cur: ListNode | null = head;

    while (cur) {
      const next = cur.next;
      cur.next = prev;
      prev = cur;
      cur = next;
    }

    return prev;
  };

  const merge = (head1: ListNode | null, head2: ListNode | null) => {
    if (!head1) {
      return head2;
    }
    if (!head2) {
      return head1;
    }

    const dummyHead = new ListNode(0);
    let cur = dummyHead;
    while (head1 && head2) {
      cur.next = head1;
      cur = cur.next;
      head1 = head1.next;

      cur.next = head2;
      cur = cur.next;
      head2 = head2.next;
    }

    cur.next = head1 !== null ? head1 : head2;
    return dummyHead.next;
  };

  const middle = findMiddle(head);
  const next = middle!.next;
  middle!.next = null;

  const reversed = reverse(next);
  merge(head, reversed)!;
}
