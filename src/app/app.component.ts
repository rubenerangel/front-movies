import { Component } from '@angular/core';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontmovies';
  name = '';

  constructor(private movies: MoviesService) {
    let data = this.movies.getData();
    this.name = data.name;
  }
}
