export function ladderLength(
  beginWord: string,
  endWord: string,
  wordList: string[]
): number {
  let wordSet = new Set([...wordList, beginWord]); // 单词集合，用于快速查询是否存在
  if (!wordSet.has(endWord)) return 0; // 剪枝，看看有没有

  let queue = [{ word: beginWord, depth: 1 }];
  while (queue.length) {
    let { word, depth } = queue.shift()!;
    for (let i = 0; i < word.length; i++) {
      // 替换字母，反向查看是否有关联的单词在里面
      for (let code = 97; code < 97 + 26; code++) {
        let str = String.fromCharCode(code);
        let tmp = (word.slice(0, i) || '') + str + (word.slice(i + 1) || '');
        if (!wordSet.has(tmp)) continue; // 跳过，
        if (tmp == endWord) return depth + 1;
        wordSet.delete(tmp); // 非常关键，不再用visiteSet标记是否遍历过，
        queue.push({ word: tmp, depth: depth + 1 }); // 单词和深度
      }
    }
  }
  return 0;
}
