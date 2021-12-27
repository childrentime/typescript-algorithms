const ADDRESS_BITS_PER_WORD = 6;
const BITS_PER_WORD = 1 << ADDRESS_BITS_PER_WORD;

const wordIndex = (bitIndex: number) => bitIndex >> ADDRESS_BITS_PER_WORD;
export default class BitSet {
  // number 最大为2^53-1 一个number是64位
  private _words: number[] = [];
  private _sizeIsSticky = false;
  private _wordsInUse = 0;
  private initWords(nbits: number): void {
    this._words = new Array<number>(wordIndex(nbits - 1) + 1);
  }

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
      this._sizeIsSticky = false;
    }
  }

  constructor(nbits?: number) {
    if (nbits && nbits < 0) {
      throw new Error(`nbits < 0 : ${nbits}`);
    }
    const initialCapacity = nbits ?? BITS_PER_WORD;
    this.initWords(initialCapacity);
    this._sizeIsSticky = false;
  }

    public set(bitIndex: number,  value: boolean): void{
        if (value)
            this.set(bitIndex);
        else
            this.clear(bitIndex);
    }

  /**
   * Sets the bit at the specified index to true.
   * @param  bitIndex a bit index
   */
  public set(bitIndex: number): void {
    if (bitIndex < 0) throw new Error(`bitIndex < 0 : ${bitIndex}`);

    let word = wordIndex(bitIndex);
    this.expandTo(word);

    this._words[word] |= 1 << bitIndex; // Restores invariants
  }

 
}
