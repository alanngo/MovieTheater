import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import {MovieService} from '../movie.service'
@Component({
  selector: 'app-show-movies',
  templateUrl: './show-movies.component.html',
  styleUrls: ['./show-movies.component.css']
})
export class ShowMoviesComponent implements OnInit {

  constructor(private movieService:MovieService) { }

  movies: Array<Movie> = []
  ngOnInit(): void 
  {
    this.getMovies()
  }

  deleteMovie(id:number)
  {
    return this.movieService.deleteMovie(id)
    .subscribe
    (
      () => {this.movies = this.movies.filter(m => m._id!=id);},
      err=>console.log(err)
    )
  }
  getMovies()
  {
    return this.movieService.getMovies()
    .subscribe
    (
      movieList => {this.movies=movieList;},
      err => console.log(err)

    )
  }
}
