import { Component, OnInit } from '@angular/core';
import { TvmazeService } from '../services/tvmaze.service';
import { Show } from '../services/tv.models';
import { MatSnackBar } from '@angular/material';
import { ByloSzukanieService } from '../bylo-szukanie.service';

@Component({
  selector: 'app-wyszukiwarka',
  templateUrl: './wyszukiwarka.component.html',
  styleUrls: ['./wyszukiwarka.component.css'],
  providers: [
    TvmazeService,
    ByloSzukanieService
  ]
})
export class WyszukiwarkaComponent implements OnInit {

  szukanyFilm: string;

  filmy: Array<Show> = [];

  constructor(private service: TvmazeService,
    private snackBar: MatSnackBar,
    private szukanie: ByloSzukanieService) { }

  ngOnInit() {
  }

  szukaj() {
    this.szukanie.setData(true);
    this.filmy = this.service.pobierz(this.szukanyFilm);
  }

  wybranoFilm(film: Show) {
    /*
    this.snackBar.open(film.name, film.type, {
      duration: 2000,
    });
    */
  }

}
