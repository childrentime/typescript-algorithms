const isPalindrome = (str: string) =>
  String([...str].reverse()) === String([...str]);

export function partition(s: string): string[][] {
  const answer: string[][] = [];
  const current: string[] = [];

  const backtrack = (index: number) => {
    for (let i = index; i < s.length + 1; i++) {
      const val = s.slice(index, i + 1);
      if (index === s.length && current.every(isPalindrome)) {
        answer.push([...current]);
        return;
      }
      current.push(val);
      backtrack(i + 1);
      current.pop();
    }
  };

  backtrack(0);

  return answer;
}
