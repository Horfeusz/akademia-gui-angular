import { Component, OnInit, Input } from '@angular/core';
import { Show } from '../services/tv.models';

@Component({
  selector: 'app-szczegoly',
  templateUrl: './szczegoly.component.html',
  styleUrls: ['./szczegoly.component.css']
})
export class SzczegolyComponent implements OnInit {

  @Input() film: Show;

  constructor() { }

  ngOnInit() {
  }

}
