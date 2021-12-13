import LinkedList from '../../../../data-structures/linked-list/LinkedList';
import reverseTraversal from '../reverseTraversal';

describe('traversal', () => {
  it('should traverse linked list in reverse order', () => {
    const linkedList = new LinkedList<number>();

    linkedList.addLast(1);
    linkedList.addLast(2);
    linkedList.addLast(3);

    const traversedNodeValues: number[] = [];
    const traversalCallback = (nodeValue: number) => {
      traversedNodeValues.push(nodeValue);
    };

    reverseTraversal(linkedList, traversalCallback);

    expect(traversedNodeValues).toEqual([3, 2, 1]);
  });
});
