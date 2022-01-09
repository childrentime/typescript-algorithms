// h sort
export default function shellSort(arr: number[]): void {
  const len = arr.length;
  let h = 1;
  while (h < len) {
    h = 3 * h + 1;
  }
  while (h >= 1) {
    for (let i = h; i < len; i++) {
      for (let j = i; j >= h && arr[j]! < arr[j - h]!; j -= h) {
        [arr[j], arr[j - h]] = [arr[j - h]!, arr[j]!];
      }
    }

    h = ~~(h / 3);
  }
}
