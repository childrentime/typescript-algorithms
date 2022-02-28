import Node from './Node';

export function connect(root: Node | null): Node | null {
  if (!root) {
    return null;
  }

  const queue: Node[] = [root];

  while (queue.length) {
    let levelnode: (Node | null)[] = [];
    while (queue.length) {
      levelnode.push(queue.shift()!);
    }
    levelnode.push(null);
    for (let i = 0; i < levelnode.length - 1; i++) {
      const node = levelnode[i]!;
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }

      levelnode[i]!.next = levelnode[i + 1]!;
    }
  }

  return root;
}
