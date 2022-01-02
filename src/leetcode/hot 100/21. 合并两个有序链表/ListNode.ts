export default class Node {
  val: number;
  next: Node | null;
  constructor(val?: number, next?: Node) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
