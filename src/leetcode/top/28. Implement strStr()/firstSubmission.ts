export function strStr(haystack: string, needle: string): number {
  if (!needle.length) {
    return 0;
  }
  const checkStr = (i: number): boolean => {
    for (let j = 0; j < needle.length; j++) {
      if (needle[j] !== haystack[i + j]) {
        return false;
      }
    }
    return true;
  };
  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    if (haystack[i] === needle[0]) {
      if (checkStr(i)) {
        return i;
      }
    }
  }
  return -1;
}
