import LinkedList from '../../../../data-structures/linked-list/LinkedList';
import traversal from '../traversal';

describe('traversal', () => {
  it('should traverse linked lists', () => {
    const linkedList = new LinkedList<number>();

    linkedList.addLast(1);
    linkedList.addLast(2);
    linkedList.addLast(3);

    const traversedNodeValues: number[] = [];
    const traversalCallback = (nodeValue: number) => {
      traversedNodeValues.push(nodeValue);
    };

    traversal(linkedList, traversalCallback);

    expect(traversedNodeValues).toEqual([1, 2, 3]);
  });
});
