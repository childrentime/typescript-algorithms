import ListNode from '../../hot 100/141. Linked List Cycle/ListNode';

export default function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  const dummyHead = new ListNode();
  let current = dummyHead;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      current.next = new ListNode(list1.val);
      current = current.next;
      list1 = list1.next;
    } else {
      current.next = new ListNode(list2.val);
      current = current.next;
      list2 = list2.next;
    }
  }

  current.next = list1 !== null ? list1 : list2;

  return dummyHead.next;
}
