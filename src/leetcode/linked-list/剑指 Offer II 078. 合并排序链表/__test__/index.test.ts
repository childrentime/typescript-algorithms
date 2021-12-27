import { mergeKLists } from '../firstSubmission';
import { mergeKLists as mergeKLists2 } from '../finalSubmission';
import ListNode from '../ListNode';
import { Console } from 'console';
import fs from 'fs';
import path from 'path';

const output = fs.createWriteStream(path.join(__dirname, './output.txt'));
const logger = new Console({ stdout: output });
describe('mergeKLists', () => {
  it('should have correct output', () => {
    const node1 = new ListNode(1, null);
    node1.next = new ListNode(4, null);
    node1.next.next = new ListNode(5, null);
    const node2 = new ListNode(1, null);
    node2.next = new ListNode(3, null);
    node2.next.next = new ListNode(4, null);
    const node3 = new ListNode(2, null);
    node3.next = new ListNode(6, null);
    const lists: Array<ListNode> = [node1, node2, node3];
    let resultNode = mergeKLists(lists);
    const array = [];
    while (resultNode) {
      array.push(resultNode.val);
      resultNode = resultNode.next;
    }
    expect(array.toString()).toBe("1,1,2,3,4,4,5,6");
    logger.log(array);
  });

  it('should have correct output', () => {
    const node1 = new ListNode(1, null);
    node1.next = new ListNode(4, null);
    node1.next.next = new ListNode(5, null);
    const node2 = new ListNode(1, null);
    node2.next = new ListNode(3, null);
    node2.next.next = new ListNode(4, null);
    const node3 = new ListNode(2, null);
    node3.next = new ListNode(6, null);
    const lists: Array<ListNode> = [node1, node2, node3];
    let resultNode = mergeKLists2(lists);
    const array = [];
    while (resultNode) {
      array.push(resultNode.val);
      resultNode = resultNode.next;
    }
    expect(array.toString()).toBe("1,1,2,3,4,4,5,6");
    logger.log(array);
  });
});
