import TreeNode from './TreeNode';

export function serialize(root: TreeNode | null): string {
  const queue: (TreeNode | null)[] = [root];
  const result: (string | number)[] = [];
  while (queue.length) {
    const node = queue.shift()!;
    if (node) {
      result.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    } else {
      result.push('x');
    }
  }
  return result.join('');
}

/*
 * Decodes your encoded data to tree.
 */
export function deserialize(data: string): TreeNode | null {
  if (data === 'x') {
    return null;
  }
  const array = data.split('');
  const root = new TreeNode(Number(array[0]!));
  const queue: TreeNode[] = [root];
  let point = 1;
  while (point < array.length) {
    const node = queue.shift()!;
    if (array[point] !== 'x') {
      const left = new TreeNode(Number(array[point]));
      node.left = left;
      queue.push(left);
    } else {
      node.left = null;
    }
    point++;
    if (array[point] !== 'x') {
      const right = new TreeNode(Number(array[point]));
      node.right = right;
      queue.push(right);
    } else {
      node.right = null;
    }
    point++;
  }
  return root;
}
