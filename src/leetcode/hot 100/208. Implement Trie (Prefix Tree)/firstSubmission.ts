class Trie {
  private children: Trie[];
  private isEnd: boolean;
  constructor() {
    this.children = new Array<Trie>(26);
    this.isEnd = false;
  }

  insert(word: string): void {
    let node: Trie = this;
    for (const child of word) {
      const index = child.charCodeAt(0) - 'a'.charCodeAt(0);
      if (!node.children[index]) {
        node.children[index] = new Trie();
      }
      node = node.children[index]!;
    }
    node.isEnd = true;
  }

  search(word: string): boolean {
    const node = this.searchPrefix(word);
    return node !== null && node.isEnd;
  }

  searchPrefix(prefix: string): Trie | null {
    let node: Trie = this;
    for (let i = 0; i < prefix.length; i++) {
      const index = prefix[i]!.charCodeAt(0) - 'a'.charCodeAt(0);
      if (!node.children[index]) {
        return null;
      }
      node = node.children[index]!;
    }

    return node;
  }

  startsWith(prefix: string): boolean {
    return this.searchPrefix(prefix) !== null;
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
