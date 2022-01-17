import { permute } from '../firstSubmission';

describe('Permutations', () => {
  it('should return a permutations ', () => {
    const array = [1, 2, 3];
    const result = permute(array);
    expect(result).toEqual([
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 2, 1],
      [3, 1, 2]
    ]);
  });
});
