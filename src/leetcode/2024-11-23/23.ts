import ListNode from '../hot 100/141. Linked List Cycle/ListNode';

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let result = new ListNode();
  let dummy = result;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      dummy.next = new ListNode(list1.val);
      dummy = dummy.next;
      list1 = list1.next;
    } else {
      dummy.next = new ListNode(list2.val);
      dummy = dummy.next;
      list2 = list2.next;
    }
  }
  if (list1) {
    dummy.next = list1;
  }

  if (list2) {
    dummy.next = list2;
  }

  return result.next;
}

export function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (lists.length <= 1) {
    return lists[0] ?? null;
  }
  let current: ListNode | null = lists[0]!;
  for (let i = 1; i < lists.length; i++) {
    current = mergeTwoLists(current, lists[i]!);
  }
  return current;
}
