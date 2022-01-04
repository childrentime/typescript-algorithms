import { removeNthFromEnd } from '../firstSubmission';
import ListNode from '../ListNode';

describe('删除链表的倒数第n个节点', () => {
  it('should have correct output', () => {
    const list = new ListNode(1);
    const result = removeNthFromEnd(list, 1);
    expect(result).toBeNull();
  });
});
