import ListNode from './ListNode';

export function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  const mergeTwoLists = (
    l1: ListNode | null,
    l2: ListNode | null
  ): ListNode | null => {
    if (!l1) {
      return l2;
    }
    if (!l2) {
      return l1;
    }
    if (l1.val < l2.val) {
      l1.next = mergeTwoLists(l1.next, l2);
      return l1;
    } else {
      l2.next = mergeTwoLists(l2.next, l1);
      return l2;
    }
  };

  if (lists.length === 0) {
    return null;
  }
  if (lists.length === 1) {
    return lists[0]!;
  }
  if (lists.length === 2) {
    return mergeTwoLists(lists[0]!, lists[1]!);
  }
  const l1: ListNode[] = [];
  const l2: ListNode[] = [];
  const mid = lists.length >>> 1;
  for (let i = 0; i < mid; i++) {
    l1.push(lists[i]!);
  }
  for (let i = mid; i < lists.length; i++) {
    l2.push(lists[i]!);
  }
  return mergeTwoLists(mergeKLists(l1), mergeKLists(l2));
}
