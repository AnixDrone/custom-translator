export class Word {
  id?:number;
  original:string;
  translated:string;

  constructor(original: string, translated: string) {
    this.original = original;
    this.translated = translated;
  }
}
