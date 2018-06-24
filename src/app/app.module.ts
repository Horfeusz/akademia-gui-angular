import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatInputModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatDividerModule,
  MatSidenavModule,
  MatListModule,
  MatCardModule,
  MatSnackBarModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatDialogModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FullCalendarModule } from 'ng-fullcalendar';

import { AppComponent } from './app.component';
import { WyszukiwarkaComponent } from './wyszukiwarka/wyszukiwarka.component';
import { HttpClientModule } from '@angular/common/http';
import { FilmyComponent } from './filmy/filmy.component';
import { SzczegolyComponent } from './szczegoly/szczegoly.component';
import { MenuComponent } from './menu/menu.component';
import { StartComponent } from './start/start.component';
import { UlubioneComponent } from './ulubione/ulubione.component';
import { InfoComponent } from './info/info.component';
import { RouterModule } from '@angular/router';
import appRouting from './routing/my-routing';
import { OdcinkiComponent } from './odcinki/odcinki.component';
import { MyDataPipe } from './my-data.pipe';
import { PodsumowanieComponent } from './odcinki/podsumowanie/podsumowanie.component';
import { UlubioneService } from './ulubione.service';
import { KalendarzComponent } from './kalendarz/kalendarz.component';


@NgModule({
  declarations: [
    AppComponent,
    WyszukiwarkaComponent,
    FilmyComponent,
    SzczegolyComponent,
    MenuComponent,
    StartComponent,
    UlubioneComponent,
    InfoComponent,
    OdcinkiComponent,
    MyDataPipe,
    PodsumowanieComponent,
    KalendarzComponent
  ],
  imports: [
    RouterModule.forRoot(appRouting),
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
    MatSnackBarModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatDialogModule,
    FullCalendarModule
  ],
  providers: [UlubioneService],
  bootstrap: [AppComponent],
  entryComponents: [PodsumowanieComponent]
})
export class AppModule { }
