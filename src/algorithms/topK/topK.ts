export default function topK(array: number[], k: number): number {
  let left = 0;
  let right = array.length - 1;
  if (k < left || k > right) {
    throw new Error('k is out of range');
  }
  k = right - k + 1;
  while (left < right) {
    const part = partition(array, left, right);
    if (part < k) {
      left = part + 1;
    } else if (part > k) {
      right = part - 1;
    } else {
      return array[k]!;
    }
  }
  return array[k]!;
}

const partition = (arr: number[], left: number, right: number): number => {
  let l = left;
  let r = right;
  let x = arr[l]!;
  while (l < r) {
    while (l < r && x <= arr[r]!) {
      r--;
    }

    arr[l] = arr[r]!;

    while (l < r && x > arr[l]!) {
      l++;
    }

    arr[r] = arr[l]!;
  }

  arr[l] = x;

  return l;
};
