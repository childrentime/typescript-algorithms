import ListNode from '../hot 100/141. Linked List Cycle/ListNode';

// 等离子合并，顺序合并的合并次数太多了
export function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (lists.length === 0) {
    return null;
  }
  if (lists.length === 1) {
    return lists[0]!;
  }
  const merge2Lists = (list1: ListNode | null, list2: ListNode | null) => {
    let dummy = new ListNode();
    let curr = dummy;
    while (list1 && list2) {
      if (list1.val < list2.val) {
        curr.next = new ListNode(list1.val);
        list1 = list1.next;
      } else {
        curr.next = new ListNode(list2.val);
        list2 = list2.next;
      }
      curr = curr.next;
    }
    if (list1) {
      curr.next = list1;
    }
    if (list2) {
      curr.next = list2;
    }
    return dummy.next;
  };

  while (lists.length > 1) {
    const newList: Array<ListNode | null> = [];
    for (let i = 0; i < lists.length; i += 2) {
      const list1 = lists[i]!;
      const list2 = i + 1 < lists.length ? lists[i + 1]! : null;
      newList.push(merge2Lists(list1, list2));
    }
    lists = newList;
  }
  return lists[0]!;
}
