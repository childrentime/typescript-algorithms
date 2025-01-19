import ListNode from '../hot 100/141. Linked List Cycle/ListNode';

function isPalindrome(head: ListNode | null): boolean {
  if (head === null || head.next === null) return true;

  // 1. 使用快慢指针找到中点
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (fast.next !== null && fast.next.next !== null) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  // 2. 翻转后半部分链表
  let secondHalf = reverseList(slow!.next);

  // 3. 比较前半部分和翻转后的后半部分
  let firstHalf = head;
  let result = true;
  while (result && secondHalf !== null) {
    if (firstHalf.val !== secondHalf.val) {
      result = false;
    }
    firstHalf = firstHalf.next!;
    secondHalf = secondHalf.next;
  }

  return result;
}

// 辅助函数：翻转链表
function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let curr: ListNode | null = head;

  while (curr !== null) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}
