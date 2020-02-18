import {Component, OnInit} from '@angular/core';

import {OriginalWordService} from '../OriginalWord.service';


@Component({
  selector: 'app-add-word',
  templateUrl: './add-word.component.html',
  styleUrls: ['./add-word.component.css']
})
export class AddWordComponent implements OnInit {

  constructor(private OriginalWordService: OriginalWordService) {
  }

  originalWord: string;
  translatedWord: string;
  addWord():void{
    this.OriginalWordService.addNewWord(this.originalWord,this.translatedWord).subscribe();
  }

  ngOnInit() {}


}
