import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/core/src/util';

export enum SearchType {
  all = '',
  movie = 'movie',
  series = 'series',
  episode = 'episode'
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  url: string = 'http://www.omdbapi.com/';
  apiKey: string = 'bcf38429';
  subUrl: string = '';
  constructor(private http: HttpClient) { }

  searchData(title: string, type: SearchType): Observable<any> {
    this.subUrl = 'http://www.omdbapi.com/?apikey=' + this.apiKey + '&s=' + title + '&type=' + type;
    return this.http.get(this.subUrl).pipe(
      map(results => results['Search'])
    );
  }

  getDetails(id) {
    this.subUrl = 'http://www.omdbapi.com/?apikey=' + this.apiKey + '&i=' + id + '&plot=full';
    return this.http.get(this.subUrl);
  }
}
