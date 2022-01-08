import QuickFind from '../quick-find/quickFind';
import QuickUnion from '../quick-union/quickUnion';
import WeightedPathCompressionQuickUnion from '../quick-union/weightedPathComPressionQuickUnion';

describe('UnionFind', () => {
  it('quickFind', () => {
    const uf = new QuickFind(10);
    uf.union(0, 1);
    uf.union(2, 9);
    uf.union(3, 7);
    uf.union(6, 5);
    uf.union(3, 9);
    expect(uf.connected(2, 3)).toBe(true);
    expect(uf.connected(3, 0)).toBe(false);
    uf.union(1, 3);
    expect(uf.connected(3, 0)).toBe(true);
  });

  it('quickUnion', () => {
    const uf = new QuickUnion(10);
    uf.union(0, 1);
    uf.union(2, 9);
    uf.union(3, 7);
    uf.union(6, 5);
    uf.union(3, 9);
    expect(uf.connected(2, 3)).toBe(true);
    expect(uf.connected(3, 0)).toBe(false);
    uf.union(1, 3);
    expect(uf.connected(3, 0)).toBe(true);
  });

  it('weightedCompressQuickUnion', () => {
    const uf = new WeightedPathCompressionQuickUnion(10);
    uf.union(0, 1);
    uf.union(2, 9);
    uf.union(3, 7);
    uf.union(6, 5);
    uf.union(3, 9);
    expect(uf.connected(2, 3)).toBe(true);
    expect(uf.connected(3, 0)).toBe(false);
    uf.union(1, 3);
    expect(uf.connected(3, 0)).toBe(true);
  });
});
