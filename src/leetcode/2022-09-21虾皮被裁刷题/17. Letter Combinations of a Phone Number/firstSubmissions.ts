export default function letterCombinations(digits: string): string[] {
  const map = new Map<string, string[]>();
  map.set('2', ['a', 'b', 'c']);
  map.set('3', ['d', 'e', 'f']);
  map.set('4', ['g', 'h', 'i']);
  map.set('5', ['j', 'k', 'l']);
  map.set('6', ['m', 'n', 'o']);
  map.set('7', ['p', 'q', 'r', 's']);
  map.set('8', ['t', 'u', 'v']);
  map.set('9', ['w', 'x', 'y', 'z']);

  let answer: string[] = [];

  for (const di of digits) {
    const items = map.get(di)!;
    const tem: string[] = [];
    for (const an of answer) {
      for (const it of items) {
        tem.push(an.concat(it));
      }
    }

    answer = tem.length === 0 ? items : tem;
  }

  return answer;
}
