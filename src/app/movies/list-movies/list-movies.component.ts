import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../movies.service';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})

export class ListMoviesComponent implements OnInit {

  allMovies: any;
  p: number = 1;
  pageSize = 10;
  collectionSize = 0;
  loading = true;

  constructor(private movies: MoviesService ) {}

  ngOnInit(): void {
    this.movies.getData().subscribe((result) => {
      this.loading = false;
      console.warn('result', result);
      this.allMovies = result;
    })
  }
}
