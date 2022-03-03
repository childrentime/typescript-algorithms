import { solve } from '../firstSubmission';

describe('Surrounded Region', () => {
  it('should replace "X"', () => {
    const board = [
      ['X', 'O', 'X', 'O', 'X', 'O'],
      ['O', 'X', 'O', 'X', 'O', 'X'],
      ['X', 'O', 'X', 'O', 'X', 'O'],
      ['O', 'X', 'O', 'X', 'O', 'X']
    ];
    solve(board);
    expect(board).toStrictEqual([
      ['X', 'O', 'X', 'O', 'X', 'O'],
      ['O', 'X', 'X', 'X', 'X', 'X'],
      ['X', 'X', 'X', 'X', 'X', 'O'],
      ['O', 'X', 'O', 'X', 'O', 'X']
    ]);
  });
});
