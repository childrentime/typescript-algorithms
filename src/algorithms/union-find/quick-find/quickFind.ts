export default class QuickFind {
  private _id: number[] = [];

  constructor(n: number) {
    for (let i = 0; i < n; i++) {
      this._id.push(i);
    }
  }

  public connected(p: number, q: number): boolean {
    return this._id[p] === this._id[q];
  }

  public union(p: number, q: number): void {
    let pid = this._id[p];
    let qid = this._id[q]!;

    for (let i = 0; i < this._id.length; i++) {
      if (this._id[i] === pid) {
        this._id[i] = qid;
      }
    }
  }
}
