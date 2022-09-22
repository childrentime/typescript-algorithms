import ListNode from '../../hot 100/160. Intersection of Two Linked Lists/ListNode';

export default function removeNthFromEnd(
  head: ListNode | null,
  n: number
): ListNode | null {
  let len = 0;
  let cur = head;
  while (cur) {
    len++;
    cur = cur.next;
  }

  n = len - n;

  cur = head;
  if (n === 0) {
    cur = cur!.next;
    return cur;
  }
  while (cur) {
    n--;
    if (n === 0) {
      cur.next = cur.next!.next;
      break;
    } else {
      cur = cur.next;
    }
  }
  return head;
}
