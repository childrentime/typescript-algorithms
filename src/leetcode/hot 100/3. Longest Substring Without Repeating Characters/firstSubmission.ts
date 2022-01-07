/*
 * 解题思路：用一个state维护当前不重复子串，记录state的历史变更，找到历史变更中长度最大的
 */
export function lengthOfLongestSubstring(s: string): number {
  let max = 0;
  let state = '';
  for (let i = 0; i < s.length; i++) {
    let item = s[i] as string;
    const index = state.indexOf(item);
    if (index !== -1) {
      // abcd 遇到 a b c d的时候 记录历史变更
      max = max < state.length ? state.length : max;
      state = state.substring(index + 1, state.length);
    }
    state = state.concat(item);
  }

  return max > state.length ? max : state.length;
}
