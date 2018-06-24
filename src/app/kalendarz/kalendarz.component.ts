import { Component, OnInit, ViewChild } from '@angular/core';
import { Options } from 'fullcalendar';
import { CalendarComponent } from 'ng-fullcalendar';

@Component({
  selector: 'app-kalendarz',
  templateUrl: './kalendarz.component.html',
  styleUrls: ['./kalendarz.component.css']
})
export class KalendarzComponent implements OnInit {

  calendarOptions: Options;

  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;

  constructor() { }

  ngOnInit() {
    const dateObj = new Date();
    const yearMonth = dateObj.getUTCFullYear() + '-' + (dateObj.getUTCMonth() + 1);

    this.calendarOptions = {
      editable: true,
      eventLimit: false,
      selectable: true,
      locale: 'pl',
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay,listMonth'
      },
      eventColor: 'red',
      events: [{
        title: 'All Day Event',
        start: '2018-06-01',
      },
      {
        title: 'Krystian Derkowski',
        start: yearMonth + '-07',
        end: yearMonth + '-10'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: yearMonth + '-09T16:00:00'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: yearMonth + '-16T16:00:00'
      },
      {
        title: 'Conference',
        start: yearMonth + '-11',
        end: yearMonth + '-13'
      },
      {
        title: 'Meeting',
        start: yearMonth + '-12T10:30:00',
        end: yearMonth + '-12T12:30:00'
      },
      {
        title: 'Lunch',
        start: yearMonth + '-12T12:00:00'
      },
      {
        title: 'Meeting',
        start: yearMonth + '-12T14:30:00'
      },
      {
        title: 'Happy Hour',
        start: yearMonth + '-12T17:30:00'
      },
      {
        title: 'Dinner',
        start: yearMonth + '-12T20:00:00'
      },
      {
        title: 'Birthday Party',
        start: yearMonth + '-13T07:00:00'
      },
      {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: yearMonth + '-28'
      }]

    };
  }

  dayClick(event) {
    console.log(event);
  }

  select(event) {
    console.log('select', event);
  }


}
