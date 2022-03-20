export function restoreIpAddress(address: string): string[] {
  const answer: string[] = [];
  const n = address.length;
  const dfs = (path: string[], start: number) => {
    if (start === n) {
      if (path.length === 4) {
        answer.push(path.join('.'));
      }
      return;
    }

    if (path.length > 4) {
      return;
    }
    for (let i = start + 1; i <= start + 3; i++) {
      if (address[start] === '0' && i - start > 1) {
        continue;
      }
      if (parseInt(address.slice(start, i)) > 255) {
        continue;
      }
      path.push(address.slice(start, i));
      dfs(path, i);
      path.pop();
    }
  };

  dfs([], 0);
  return answer;
}
