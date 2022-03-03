import Node from './ListNode';

export function copyRandomList(head: Node | null): Node | null {
  const map = new Map<Node, Node>();
  // dfs克隆
  const dfs = (node: Node | null): Node | null => {
    if (!node) {
      return null;
    }
    if (map.has(node)) {
      return map.get(node)!;
    }
    const clone = new Node(node.val);
    map.set(node, clone);
    clone.next = dfs(node.next);
    clone.random = dfs(node.random);
    return clone;
  };
  return dfs(head);
}
