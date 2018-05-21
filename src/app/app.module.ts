import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatInputModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatDividerModule, MatSidenavModule, MatListModule, MatCardModule, MatSnackBarModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { WyszukiwarkaComponent } from './wyszukiwarka/wyszukiwarka.component';
import { HttpClientModule } from '@angular/common/http';
import { FilmyComponent } from './filmy/filmy.component';
import { SzczegolyComponent } from './szczegoly/szczegoly.component';


@NgModule({
  declarations: [
    AppComponent,
    WyszukiwarkaComponent,
    FilmyComponent,
    SzczegolyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
