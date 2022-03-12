export function numOfSubarrays(
  arr: number[],
  k: number,
  threshold: number
): number {
  let answer = 0;
  const n = arr.length;
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += arr[i]!;
  }
  if (sum / k >= threshold) {
    answer++;
  }
  for (let i = k; i < n; i++) {
    sum += arr[i]!;
    sum -= arr[i - k]!;
    if (sum / k >= threshold) {
      answer++;
    }
  }
  return answer;
}
