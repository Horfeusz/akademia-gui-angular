import { Component, OnInit, Input } from '@angular/core';
import { Show } from '../services/tv.models';
import { Router } from '@angular/router';
import { UlubioneService } from '../ulubione.service';

@Component({
  selector: 'app-szczegoly',
  templateUrl: './szczegoly.component.html',
  styleUrls: ['./szczegoly.component.css']
})
export class SzczegolyComponent implements OnInit {

  @Input() film: Show;

  constructor(private router: Router, private ulubione: UlubioneService) { }

  ngOnInit() {
  }

  odcinki() {
    //const id = btoa(String(this.film.id));
    //this.router.navigate(['/odcinki', id]);
    const id = btoa(String(this.film));

    const tmp = JSON.stringify({
      id: String(this.film.id),
      name: this.film.name
    });

    this.router.navigate(['/odcinki', tmp]);
  }

  lubieTo() {
    this.ulubione.dodajDoUlubionych(this.film);
  }

}
