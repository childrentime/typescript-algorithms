export function convertToTitle(columnNumber: number): string {
  const answer: string[] = [];

  while (columnNumber > 0) {
    columnNumber--;
    answer.push(String.fromCharCode((columnNumber % 26) + 'A'.charCodeAt(0)));
    columnNumber = Math.floor(columnNumber / 26);
  }

  return answer.reverse().join('');
}
