import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../movies.service';
import {map} from 'rxjs/operators'

interface MoviesType {
  year: string;
  title: string;
  poster: string;
}

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})

export class ListMoviesComponent implements OnInit {
  allMovies: any;
  page = 1;
  pageSize = 10;
  collectionSize = 0;
  loading = true;

  constructor(private movies: MoviesService) {
    this.refreshMovies();
  }

  refreshMovies() {
    this.movies.getData().subscribe(data => {
      console.warn(data);
      this.loading = false;
      this.allMovies = data;
      // data.map()
    });

    // this.movies.getData().map(res => {

    // })
  }

  ngOnInit(): void {
  }
}
