export default class WeightedPathCompressionQuickUnion {
  private _id: number[] = [];
  private _size: number[] = [];

  constructor(n: number) {
    for (let i = 0; i < n; i++) {
      this._id[i] = i;
    }
    this._size.length = n;
    this._size.fill(1);
  }

  private root(i: number): number {
    while (this._id[i] !== i) {
      // path compression
      this._id[i] = this._id[this._id[i]!]!;
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
    if (i === j) {
      return;
    }

    // weighted
    if (this._size[i]! < this._size[j]!) {
      this._id[i] = j;
      this._size[j] += this._size[i]!;
    } else {
      this._id[j] = i;
      this._size[i] += this._size[j]!;
    }
  }
}
