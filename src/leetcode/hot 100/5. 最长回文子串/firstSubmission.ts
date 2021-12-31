/**
 * 定义state变量，遍历字符串，使用state变量连接新的值，判断该值在state中出现的位置
 * 得到所有的子串，取最长的回文串
 */
export function longestPalindrome(s: string): string {
  const checkIsPalindrome = (str: string): boolean => {
    let flag = true;
    for (let i = 0; i < str.length - i - 1; i++) {
      if (str[i] !== str[str.length - i - 1]) {
        flag = false;
        break;
      }
    }
    return flag;
  };

  let max = 0;
  let maxStr = '';
  let state = '';
  for (let i = 0; i < s.length; i++) {
    let item = s[i]!;
    state = state.concat(item);
    let number = 0;
    let index = state.indexOf(item, number);
    if (index === -1) {
      continue;
    }
    while (state.length - index > max) {
      let str = state.substring(index, state.length);
      if (checkIsPalindrome(str)) {
        max = str.length;
        maxStr = str;
        break;
      }
      number = index + 1;
      index = state.indexOf(item, number);
    }
  }

  return maxStr === '' ? s[0]! : maxStr;
}
