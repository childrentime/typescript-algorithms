import { nextPermutation } from '../firstSubmission';

describe('下一个排列', () => {
  it('should have correct output', () => {
    const array = [3, 2, 1];
    nextPermutation(array);
    expect(array.toString()).toBe('1,2,3');
  });
});
