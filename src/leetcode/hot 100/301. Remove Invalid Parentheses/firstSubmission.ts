export function removeInvalidParentheses(s: string): string[] {
  const isValid = (s: string): boolean => {
    let count = 0;
    for (const item of s) {
      if (item === '(') {
        count++;
      } else if (item === ')') {
        if (count === 0) {
          return false;
        }
        count--;
      }
    }

    return count === 0;
  };
  const answer: string[] = [];
  let set = new Set<string>();
  set.add(s);
  while (true) {
    for (const item of set) {
      if (isValid(item)) {
        answer.push(item);
      }
    }
    if (answer.length) {
      return answer;
    }
    const nextSet = new Set<string>();
    for (const item of set) {
      for (let i = 0; i < item.length; i++) {
        if (i > 0 && item[i] === item[i - 1]) {
          continue;
        }
        if (item[i] === '(' || item[i] === ')') {
          nextSet.add(item.substring(0, i).concat(item.substring(i + 1)));
        }
      }
    }

    set = nextSet;
  }
}
