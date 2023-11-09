export function findAnagrams(s: string, p: string): number[] {
  const slen = s.length;
  const plen = p.length;

  if (slen < plen) {
    return [];
  }

  const result: number[] = [];
  let differ = 0;
  const array = new Array(26).fill(0);

  for (let i = 0; i < plen; i++) {
    ++array[s[i]!.charCodeAt(0) - 'a'.charCodeAt(0)];
    --array[p[i]!.charCodeAt(0) - 'a'.charCodeAt(0)];
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 0) {
      differ++;
    }
  }

  if (differ === 0) {
    result.push(0);
  }

  for (let i = 0; i < slen - plen; i++) {
    const out = s[i]!.charCodeAt(0) - 'a'.charCodeAt(0);
    const input = s[i + plen]!.charCodeAt(0) - 'a'.charCodeAt(0);
    const v = array[out];
    if (v === 1) {
      differ--;
    } else if (v === 0) {
      differ++;
    }

    --array[out];

    const vi = array[input];
    if (vi === -1) {
      differ--;
    } else if (vi === 0) {
      differ++;
    }

    ++array[input];

    if (differ === 0) {
      result.push(i + 1);
    }
  }

  return result;
}
