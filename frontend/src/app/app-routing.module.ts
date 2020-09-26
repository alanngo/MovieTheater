import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { RootComponent } from './root/root.component';
import { ShowMoviesComponent } from './show-movies/show-movies.component';

const routes: Routes = 
[
  {path: "showMovies", component:ShowMoviesComponent},
  {path: "addMovie", component:AddMovieComponent},
  {path: "root", component:RootComponent},

  {path:"**", redirectTo:"root", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
