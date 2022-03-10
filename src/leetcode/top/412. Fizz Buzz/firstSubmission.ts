export function fizzBuzz(n: number): string[] {
  let answer: string[] = [];

  const dfs = (n: number) => {
    if (n % 3 === 0 && n % 5 === 0) {
      answer.push('FizzBuzz');
    } else if (n % 3 === 0) {
      answer.push('Fizz');
    } else if (n % 5 === 0) {
      answer.push('Buzz');
    } else {
      answer.push(n.toString());
    }
  };

  for (let i = 1; i <= n; i++) {
    dfs(n);
  }

  return answer;
}
