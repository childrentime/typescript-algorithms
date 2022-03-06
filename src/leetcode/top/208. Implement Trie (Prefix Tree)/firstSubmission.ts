const asciiA = 'a'.charCodeAt(0);
export class Trie {
  private children: Trie[] = new Array<Trie>(26);
  private isEnd: boolean = false;

  public insert(word: string) {
    let node = this as Trie;
    for (const w of word) {
      const index = w.charCodeAt(0) - asciiA;
      if (!node.children[index]) {
        node.children[index] = new Trie();
      }
      node = node.children[index]!;
    }
    node.isEnd = true;
  }

  public search(word: string): boolean {
    const node = this.searchPrefix(word);
    return !!node && node.isEnd;
  }

  private searchPrefix(prefix: string): Trie | null {
    let node = this as Trie;
    for (const w of prefix) {
      const index = w.charCodeAt(0) - asciiA;
      if (!node.children[index]) {
        return null;
      }
      node = node.children[index]!;
    }
    return node;
  }

  public startsWith(word: string): boolean {
    return !!this.searchPrefix(word);
  }
}
