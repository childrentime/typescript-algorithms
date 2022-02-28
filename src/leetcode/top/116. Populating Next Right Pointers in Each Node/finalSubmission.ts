import Node from './Node';

export function connect(root: Node | null): Node | null {
  if (!root || !root.left || !root.right) return root;
  root.left.next = root.right;
  if (root.next && root.right) root.right.next = root.next.left;
  connect(root.left);
  connect(root.right);
  return root;
}
