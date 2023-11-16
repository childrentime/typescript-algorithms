export function numOfSubarrays(
  arr: number[],
  k: number,
  threshold: number
): number {
  let answer = 0;
  let sum = k * threshold;

  let pre = 0;
  for (let i = 0; i < k; i++) {
    pre += arr[i]!;
  }
  for (let i = k; i < arr.length; i++) {
    if (pre > sum) {
      answer++;
    }
    console.log('pre', pre, arr[i], arr[i - k]);
    pre += arr[i]!;
    pre -= arr[i - k]!;
  }

  return answer;
}

numOfSubarrays([2, 2, 2, 2, 5, 5, 5, 8], 3, 4);
