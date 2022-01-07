import { uniquePaths } from '../firstSubmission';

describe('unique path', () => {
  it('should have current return value', () => {
    const result = uniquePaths(3, 7);
    expect(result).toBe(28);
  });
});
