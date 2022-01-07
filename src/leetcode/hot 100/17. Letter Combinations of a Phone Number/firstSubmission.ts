export function letterCombinations(digits: string): string[] {
  if (digits.length === 0) {
    return [];
  }
  const numbers: number[] = digits.split('').map(Number);
  const map = new Map<number, string[]>();
  map.set(2, ['a', 'b', 'c']);
  map.set(3, ['d', 'e', 'f']);
  map.set(4, ['g', 'h', 'i']);
  map.set(5, ['j', 'k', 'l']);
  map.set(6, ['m', 'n', 'o']);
  map.set(7, ['p', 'q', 'r', 's']);
  map.set(8, ['t', 'u', 'v']);
  map.set(9, ['w', 'x', 'y', 'z']);
  let state: string[] = map.get(numbers[0]!)!;
  if (digits.length < 2) {
    return state;
  }
  for (let i = 1; i < numbers.length; i++) {
    const values = map.get(numbers[i]!)!;
    const arr: string[] = [];
    for (const item of values) {
      for (const st of state) {
        arr.push(st.concat(item));
      }
    }
    state = arr;
  }

  return state;
}
