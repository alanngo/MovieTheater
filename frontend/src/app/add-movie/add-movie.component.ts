import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  constructor(
    private movieService:MovieService, 
    private fb: FormBuilder,
    private router: Router
    ) { }

  movieForm:FormGroup
  ngOnInit(): void 
  {
    this.movieForm = this.fb.group
    (
      {
        'title':['title', [Validators.required]],
        'rating':['rating', [Validators.required]],
        'rated':['rated', [Validators.required]]
      }
    )
  }

  
  addMovie()
  {
    let movie: Movie = new Movie()
    console.log("add movie")
    movie.title = this.movieForm.get("title").value
    movie.rating = this.movieForm.get("rating").value
    movie.rated = this.movieForm.get("rated").value
    console.log(movie)
    this.movieService.adMovie(movie).subscribe
    (
      movie => console.log(movie),
      err => console.log(err)
    )
  }

  showMovies()
  {
    this.router.navigate(['showMovies'])
  }
}
