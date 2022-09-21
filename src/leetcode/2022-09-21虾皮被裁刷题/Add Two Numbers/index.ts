class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === void 0 ? 9 : val;
    this.next = next === void 0 ? null : next;
  }
}
export default function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const dummyHead = new ListNode(0);
  let current = dummyHead;
  let carry = 0;
  while (l1 !== null && l2 !== null) {
    let v = l1.val + l2.val + carry;
    if (v >= 10) {
      v = v - 10;
      carry = 1;
    } else {
      carry = 0;
    }
    current.next = new ListNode(v);
    current = current.next;
    l1 = l1.next;
    l2 = l2.next;
  }
  while (l1 != null) {
    let v = l1.val + carry;
    if (v >= 10) {
      v = v - 10;
      carry = 1;
    } else {
      carry = 0;
    }
    current.next = new ListNode(v);
    current = current.next;
    l1 = l1.next;
  }
  while (l2 != null) {
    let v = l2.val + carry;
    if (v >= 10) {
      v = v - 10;
      carry = 1;
    } else {
      carry = 0;
    }
    current.next = new ListNode(v);
    current = current.next;
    l2 = l2.next;
  }
  if (carry !== 0) {
    current.next = new ListNode(1);
  }
  return dummyHead.next;
}
