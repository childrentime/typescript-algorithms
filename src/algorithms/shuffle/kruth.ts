export default function shuffle(arr: number[]): void {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    const r = ~~(Math.random() * (i + 1));
    [arr[i], arr[r]] = [arr[r]!, arr[i]!];
  }
}
