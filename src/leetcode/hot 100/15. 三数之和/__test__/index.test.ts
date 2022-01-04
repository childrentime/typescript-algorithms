import { threeSum } from '../firstSubmission';

describe('三数之和', () => {
  it('should have correct output', () => {
    const result = threeSum([-1, 0, 1, 2, -1, -4]);

    expect(result.toString()).toBe('-1,0,1,-1,-1,2');
  });
});
