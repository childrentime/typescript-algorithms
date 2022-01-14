import { findKthLargest } from '../firstSubmission';
describe('Kth Largest Element in an Array', () => {
  it('should return Kth in an Array', () => {
    const array = [3, 2, 3, 1, 2, 4, 5, 5, 6];
    const result = findKthLargest(array, 4);
    expect(result).toBe(4);
  });
});
