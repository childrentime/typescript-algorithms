import ListNode from './ListNode';

const merge = (head1: ListNode | null, head2: ListNode | null) => {
  const finalNode = new ListNode(0, null);
  let currentNode = finalNode;
  while (head1 && head2) {
    if (head1.val <= head2.val) {
      currentNode.next = head1;
      head1 = head1.next;
    } else {
      currentNode.next = head2;
      head2 = head2.next;
    }
    currentNode = currentNode.next;
  }
  if (head1) {
    currentNode.next = head1;
  }
  if (head2) {
    currentNode.next = head2;
  }
  return finalNode.next;
};
export function sortList(head: ListNode | null): ListNode | null {
  const finalNode = new ListNode(0, head);
  let length = 0;
  let temp = head;
  while (temp) {
    length++;
    temp = temp.next;
  }
  for (let sublength = 1; sublength < length; sublength <<= 1) {
    let prev = finalNode;
    let current = finalNode.next;
    while (current) {
      let head1 = current;
      for (let i = 1; i < sublength && current.next; i++) {
        current = current.next;
      }
      let head2 = current.next;
      //断开与head1的连接
      current.next = null;
      current = head2;

      for (let i = 1; i < sublength && current && current.next; i++) {
        current = current.next;
      }

      //断开与head2的连接
      let next = null;
      if (current) {
        next = current.next;
        current.next = null;
      }

      let union = merge(head1, head2);
      prev.next = union;

      while (prev.next) {
        prev = prev.next;
      }
      current = next;
    }
  }
  return finalNode.next;
}
