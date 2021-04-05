import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [ListMoviesComponent],
  imports: [
    CommonModule,
    NgbModule,
    NgxPaginationModule
  ],
  exports: [
    ListMoviesComponent
  ]
})
export class MoviesModule { }
