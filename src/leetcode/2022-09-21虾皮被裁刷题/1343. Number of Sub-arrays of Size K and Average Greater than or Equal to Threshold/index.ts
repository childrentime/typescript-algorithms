export default function numOfSubarrays(
  arr: number[],
  k: number,
  threshold: number
): number {
  let result = 0;
  let first = 0;
  let end = first + k - 1;
  let cover = 0;
  for (let i = first; i <= end; i++) {
    cover += arr[i]!;
  }
  if (cover / k >= threshold) {
    result += 1;
  }
  while (end < arr.length) {
    end++;
    cover = cover + arr[end]! - arr[first]!;
    first++;

    if (cover / k >= threshold) {
      result += 1;
    }
  }

  return result;
}
