import { levelOrder } from '../firstSubmission';
import TreeNode from '../TreeNode';

describe('binary-tree-level-order-traversal', () => {
  it('should have correct output', () => {
    const left = new TreeNode(9);
    const rightLeft = new TreeNode(15);
    const rightRight = new TreeNode(7);
    const right = new TreeNode(20, rightLeft, rightRight);
    const tree = new TreeNode(3, left, right);
    const res = levelOrder(tree);
    expect(res).toEqual([[3], [9, 20], [15, 7]]);
  });
});
