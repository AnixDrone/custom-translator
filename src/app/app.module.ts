import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CoreModule} from './core/core.module';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatCardModule, MatChipsModule, MatFormFieldModule, MatInputModule, MatRadioModule} from '@angular/material';
import { MainWindowComponent } from './main-window/main-window.component';
import {FormsModule} from '@angular/forms';
import { AddWordComponent } from './add-word/add-word.component';
import { DeleteWordComponent } from './delete-word/delete-word.component';
import { SearchWordComponent } from './search-word/search-word.component';

import {AppRoutingModule} from './app-routing/app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    MainWindowComponent,
    AddWordComponent,
    DeleteWordComponent,
    SearchWordComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    AppRoutingModule,
    MatChipsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
