import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Word} from './Persistance/word';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OriginalWordService {
  private word: Word;

  constructor(private http: HttpClient) {
  }

  private url = 'api/eng';
 // private url = 'https://custom-translator.herokuapp.com/api/eng';


  searchOriginalWords(term: string): Observable<Word[]> {
    if (!term.trim()) {

      return of([]);
    }
    return this.http.get<Word[]>(`${this.url}/searchOriginal/${term}`);
  }

  addNewWord(original: string, translated: string): Observable<Word> {
    this.word = new Word(original, translated);
    return this.http.post<Word>(`${this.url}/add/`, this.word);
  }

  deleteWord(id:number):Observable<Word>{
    return this.http.delete<Word>(`${this.url}/delete/${id}`);
  }
}
