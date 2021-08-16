import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { data } from './data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  private _url: string = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) { }

  getData(): Observable<data[]> {
      return this.http.get<data[]>(this._url);
  }
}
