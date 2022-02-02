export function wordBreak(s: string, wordDict: string[]): boolean {
  const map = new Map<number, number[]>();
  const stack: number[] = [];
  let visited: boolean[] = new Array(wordDict.length).fill(true);
  while (s.length) {
    let flag: boolean = false;
    for (let i = 0; i < wordDict.length; i++) {
      if (s.startsWith(wordDict[i]!) && visited[i]) {
        stack.push(i);
        map.set(
          stack.length,
          map.get(stack.length) ? [...map.get(stack.length)!, i] : [i]
        );
        s = s.substring(wordDict[i]!.length, s.length);
        flag = true;
        break;
      }
    }

    visited = new Array(wordDict.length).fill(true);
    if (!flag) {
      if (stack.length !== 0) {
        const i = stack.pop()!;
        s = wordDict[i]!.concat(s);
        const ban: number[] = map.get(stack.length + 1)! ?? [];
        for (const item of ban) {
          visited[item] = false;
        }
      } else {
        return false;
      }
    }
  }
  return true;
}
