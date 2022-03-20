export function letterCombinations(digits: string): string[] {
  if (!digits.length) {
    return [];
  }

  const map = new Map<string, string[]>();
  map.set('2', ['a', 'b', 'c']);
  map.set('3', ['d', 'e', 'f']);
  map.set('4', ['g', 'h', 'i']);
  map.set('5', ['j', 'k', 'l']);
  map.set('6', ['m', 'n', 'o']);
  map.set('7', ['p', 'q', 'r', 's']);
  map.set('8', ['t', 'u', 'v']);
  map.set('9', ['w', 'x', 'y', 'z']);

  let answer: string[] = [''];
  for (const char of digits) {
    const arr = map.get(char)!;
    let temp: string[] = [];
    for (const item1 of answer) {
      for (const item2 of arr) {
        temp.push(item1.concat(item2));
      }
    }
    answer = temp;
  }
  return answer;
}
