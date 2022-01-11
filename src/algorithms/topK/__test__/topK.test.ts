import topK from '../topK';

describe('topK', () => {
  it('should return The Kth largest number', () => {
    const array = [1, 7, 8, 9, 12, 54, 543, 423, 999, 324];
    const first = topK(array, 1);
    const second = topK(array, 2);
    expect(first).toBe(999);
    expect(second).toBe(543);
  });
});
