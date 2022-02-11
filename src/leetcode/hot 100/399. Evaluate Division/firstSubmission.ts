// equations = [["a","b"],["b","c"]],
// values = [2.0,3.0],
// queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]
export function calcEquation(
  equations: string[][],
  values: number[],
  queries: string[][]
): number[] {
  let nvars = 0;
  const n = equations.length;
  const variables = new Map<string, number>();
  for (const equation of equations) {
    if (!variables.has(equation[0]!)) {
      variables.set(equation[0]!, nvars++);
    }
    if (!variables.has(equation[1]!)) {
      variables.set(equation[1]!, nvars++);
    }
  }
  const edges = new Array(nvars).fill(0);
  for (let i = 0; i < nvars; i++) {
    edges[i] = [];
  }
  for (let i = 0; i < n; i++) {
    const va = variables.get(equations[i]![0]!)!;
    const vb = variables.get(equations[i]![1]!)!;
    edges[va].push([vb, values[i]]);
    edges[vb].push([va, 1 / values[i]!]);
  }

  const answer = [];
  for (const query of queries) {
    let result = -1.0;
    if (variables.has(query[0]!) && variables.has(query[1]!)) {
      const ia = variables.get(query[0]!)!;
      const ib = variables.get(query[1]!)!;
      if (ia === ib) {
        result = 1.0;
      } else {
        const queue: number[] = [];
        queue.push(ia);
        const ratioes = new Array(nvars).fill(-1.0);
        ratioes[ia] = 1.0;

        while (queue.length && ratioes[ib] < 0) {
          const x = queue.pop()!;
          for (const [y, val] of edges[x]) {
            if (ratioes[y] < 0) {
              ratioes[y] = ratioes[x] * val;
              queue.push(y);
            }
          }
        }
        result = ratioes[ib];
      }
    }
    answer.push(result);
  }

  return answer;
}
