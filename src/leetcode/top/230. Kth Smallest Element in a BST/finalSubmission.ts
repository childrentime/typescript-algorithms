import TreeNode from './TreeNode';

export function kthSmallest(root: TreeNode | null, k: number): number {
  return new BST(root).kthSmallest(k);
}

class BST {
  private root: TreeNode | null;
  private nodeSum: Map<TreeNode, number>;
  constructor(root: TreeNode | null) {
    this.root = root;
    this.nodeSum = new Map<TreeNode, number>();
    this.countNodeSum(root);
  }

  public kthSmallest(k: number): number {
    let node = this.root;
    while (node) {
      const left = this.getNodeSum(node.left);
      if (left < k - 1) {
        node = node.right;
        k -= left + 1;
      } else if (left === k - 1) {
        break;
      } else {
        node = node.left;
      }
    }
    return node!.val;
  }

  private countNodeSum(root: TreeNode | null): number {
    if (!root) {
      return 0;
    }
    const left = this.countNodeSum(root.left);
    const right = this.countNodeSum(root.right);
    this.nodeSum.set(root, left + right + 1);
    return left + right + 1;
  }

  private getNodeSum(node: TreeNode | null): number {
    if (!node) {
      return 0;
    }
    return this.nodeSum.get(node)!;
  }
}
