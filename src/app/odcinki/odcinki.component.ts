import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TvmazeService } from '../services/tvmaze.service';
import { Episode, Show } from '../services/tv.models';
import { Observable } from 'rxjs/Observable';
import { PodsumowanieComponent } from './podsumowanie/podsumowanie.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-odcinki',
  templateUrl: './odcinki.component.html',
  styleUrls: ['./odcinki.component.css'],
  providers: [TvmazeService]
})
export class OdcinkiComponent implements OnInit {

  film: Show;
  odcinki: Observable<Episode[]>;
  displayedColumns = ['sezon', 'nazwa', 'data', 'podsumowanie'];

  constructor(private route: ActivatedRoute,
    private service: TvmazeService,
    public dialog: MatDialog) { }

  ngOnInit() {
    const tmp = this.route.snapshot.params['id'];
    //const jsonik = JSON.parse(tmp);


    this.film = JSON.parse(tmp);
    this.odcinki = this.service.odcinki(this.film.id);
  }

  summary(odcinek: Episode) {
    this.dialog.open(PodsumowanieComponent, {
      width: '400px',
      data: odcinek
    });
  }

}
