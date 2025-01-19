/**
 * 
 输入：nums1 = [4,1,2], nums2 = [1,3,4,2].
输出：[-1,3,-1]
解释：nums1 中每个值的下一个更大元素如下所述：
- 4 ，用加粗斜体标识，nums2 = [1,3,4,2]。不存在下一个更大元素，所以答案是 -1 。
- 1 ，用加粗斜体标识，nums2 = [1,3,4,2]。下一个更大元素是 3 。
- 2 ，用加粗斜体标识，nums2 = [1,3,4,2]。不存在下一个更大元素，所以答案是 -1 。
 */
export function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const map = new Map<number, number>();
  const stack: number[] = [];
  for (let i = 0; i < nums2.length; i++) {
    while (nums2[stack[stack.length - 1]!]! < nums2[i]!) {
      const index = stack.pop()!;
      const v = nums2[index]!;
      map.set(v, nums2[i]!);
    }
    stack.push(i);
  }
  const result: number[] = [];
  for (const n of nums1) {
    let v = -1;
    if (map.has(n)) {
      v = map.get(n)!;
    }
    result.push(v);
  }
  return result;
}
