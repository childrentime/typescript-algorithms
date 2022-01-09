export default function selectSort(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; i > 0; j--) {
      if (arr[j]! < arr[j - 1]!) {
        [arr[j], arr[j - 1]] = [arr[j - 1]!, arr[j]!];
      } else {
        break;
      }
    }
  }
}
