import { Component, OnInit } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Word} from '../Persistance/word';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import {OriginalWordService} from '../OriginalWord.service';

@Component({
  selector: 'app-search-word',
  templateUrl: './search-word.component.html',
  styleUrls: ['./search-word.component.css']
})
export class SearchWordComponent implements OnInit {

  constructor(private OriginalWordService: OriginalWordService) { }
  private searchTerms = new Subject<string>();
  originalWord = ``;
  words$: Observable<Word[]>;
  id:number;

  deleteWord(id:number):void{
   this.OriginalWordService.deleteWord(id).subscribe();
   this.id=id;
  }


  ngOnInit() {
    this.words$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => {
          this.id=null;
          return this.OriginalWordService.searchOriginalWords(term);
        },
      ),
    );

  }
  search(term: string): void {
    this.searchTerms.next(term);
  }

}
