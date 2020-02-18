import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router';

import {AddWordComponent} from '../add-word/add-word.component';
import {DeleteWordComponent} from '../delete-word/delete-word.component';
import {SearchWordComponent} from '../search-word/search-word.component';

const routes:Routes=[
  {path:`search`,component:SearchWordComponent},
  {path: ``, redirectTo: `search`,pathMatch: `full`},
  {path: `add`,component:AddWordComponent},
  {path:`delete`,component:DeleteWordComponent}
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
