import { longestPalindrome } from '../finalSubmission';

describe('longestPalindrome', () => {
  it('finalSubmission should have current output', () => {
    const result = longestPalindrome('ccc');
    expect(result).toBe('ccc');
  });
});
