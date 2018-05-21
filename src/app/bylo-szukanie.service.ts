import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ByloSzukanieService {

  private data = new Subject<boolean>();

  data$ = this.data.asObservable();

  constructor() { }

  setData(value: boolean) {
    this.data.next(value);
  }

}
