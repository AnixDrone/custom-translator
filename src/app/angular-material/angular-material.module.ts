import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import {MatNativeDateModule} from '@angular/material';
import {LayoutModule} from '@angular/cdk/layout';

const modules: any[] = [
  LayoutModule,

  MatAutocompleteModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatNativeDateModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AngularMaterialModule {
}
