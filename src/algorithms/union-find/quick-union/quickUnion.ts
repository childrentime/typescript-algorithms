export default class QuickUnion {
  private _id: number[] = [];

  constructor(n: number) {
    for (let i = 0; i < n; i++) {
      this._id.push(i);
    }
  }

  private root(i: number): number {
    while (this._id[i] !== i) {
      i = this._id[i]!;
    }
    return i;
  }

  public connected(p: number, q: number): boolean {
    return this.root(p) === this.root(q);
  }

  public union(p: number, q: number): void {
    const i = this.root(p);
    const j = this.root(q);
    this._id[i] = j;
  }
}
