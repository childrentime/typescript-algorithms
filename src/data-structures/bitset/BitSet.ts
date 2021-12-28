
/**
 * js 中所有数字都是以双精度浮点数来存储的。即64位；但 当任何数字在进行位运算时 js 内部将其转换成32位有符号整型。
 * 也就是使用number数组来标识位图的时候，我们只能使用32位，也就是5地址
 */
const ADDRESS_BITS_PER_WORD = 5;
const BITS_PER_WORD = 1 << ADDRESS_BITS_PER_WORD;
const WORD_MASK = 0xffffffffffffffff;
const wordIndex = (bitIndex: number) => bitIndex >> ADDRESS_BITS_PER_WORD;
export default class BitSet {
  // number 最大为2^53-1 一个number是64位
  private _words: number[] = [];
  private _wordsInUse = 0;

  private expandTo(word: number): void {
    let wordsRequired = word + 1;
    if (this._wordsInUse < wordsRequired) {
      this.ensureCapacity(wordsRequired);
      this._wordsInUse = wordsRequired;
    }
  }

  private ensureCapacity(wordsRequired: number): void {
    if (this._words.length < wordsRequired) {
      // Allocate larger of doubled size or required size
      this._words.length = Math.max(2 * this._words.length, wordsRequired);
    }
  }

  private recalculateWordsInUse(): void {
    // Traverse the bitset until a used word is found
    let i;
    for (i = this._wordsInUse - 1; i >= 0; i--) if (this._words[i] != 0) break;

    this._wordsInUse = i + 1; // The new logical size
  }

  private checkRange(fromIndex: number, toIndex: number) {
    if (fromIndex < 0) throw new Error('fromIndex < 0: ' + fromIndex);
    if (toIndex < 0) throw new Error('toIndex < 0: ' + toIndex);
    if (fromIndex > toIndex)
      throw new Error('fromIndex: ' + fromIndex + ' > toIndex: ' + toIndex);
  }

  private initWords(nbits: number): void {
    this._words = new Array<number>(wordIndex(nbits - 1) + 1);
  }

  constructor(nbits?: number) {
    if (nbits && nbits < 0) {
      throw new Error(`nbits < 0 : ${nbits}`);
    }
    const initialCapacity = nbits ?? BITS_PER_WORD;
    this.initWords(initialCapacity);
  }

  public clear(bitIndex: number): void {
    if (bitIndex < 0) throw new Error('bitIndex < 0: ' + bitIndex);

    let word = wordIndex(bitIndex);
    if (word >= this._wordsInUse) return;

    this._words[word] &= ~(1 << bitIndex);

    this.recalculateWordsInUse();
  }
}
