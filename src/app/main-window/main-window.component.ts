import {Component, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import {templateJitUrl} from '@angular/compiler';
import {OriginalWordService} from '../OriginalWord.service';
import {Word} from '../Persistance/word';

@Component({
  selector: 'app-main-window',
  templateUrl: './main-window.component.html',
  styleUrls: ['./main-window.component.css']
})
export class MainWindowComponent implements OnInit {

  constructor(private OriginalWordService: OriginalWordService) {
  }

  ngOnInit(): void {
  }

}
