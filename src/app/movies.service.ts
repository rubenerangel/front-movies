import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  getData() {
    return {
      name: 'Peter',
      age: 43,
      id: 100
    }
  }
}
