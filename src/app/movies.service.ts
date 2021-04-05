import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _http:HttpClient) { }

  getData() {
    let url = 'http://localhost:3001/api/v1/movies';

    return this._http.get(url);
  }
}
