import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShowResponse, Show, Episode } from './tv.models';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TvmazeService {

  private readonly baseUrl = 'http://api.tvmaze.com';

  constructor(private http: HttpClient) { }

  pobierz(szukany: String): Array<Show> {
    const url = `${this.baseUrl}/search/shows?q=${szukany}`;
    const result: Array<Show> = [];

    this.http.get<ShowResponse[]>(url).subscribe(item => {
      console.log(item);
      item.forEach(film => result.push(film.show));
    });

    return result;
  }

  odcinki(id: any): Observable<Episode[]> {
    const url = `${this.baseUrl}/shows/${id}/episodes`;
    return this.http.get<Episode[]>(url);
  }

}
