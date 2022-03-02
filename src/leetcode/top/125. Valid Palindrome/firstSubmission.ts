export function isPalindrome(s: string): boolean {
  let left = 0;
  let right = s.length - 1;

  // 65 90 97 122
  const vaildLetter = (letter: string): boolean => {
    return (
      (letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90) ||
      (letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122) ||
      !isNaN(parseInt(letter))
    );
  };
  while (left < right) {
    while (left < right && !vaildLetter(s[left]!)) {
      left++;
    }
    while (left < right && !vaildLetter(s[right]!)) {
      right--;
    }
    if (s[left]!.toLocaleUpperCase() !== s[right]!.toLocaleUpperCase()) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
