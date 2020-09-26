import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { Observable, throwError} from 'rxjs';
import { Movie } from './movie';
import {catchError} from 'rxjs/operators'
const url = "http://localhost:5000/api/movies"

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }

  getMovies():Observable<Movie[]>
  {
    return this.http.get<Movie[]>(url)
    .pipe(catchError(this.handleError))
  }

  deleteMovie(id:number):Observable<Movie>
  {
    return this.http.delete<Movie>(url+"/"+id)
    .pipe(catchError(this.handleError))
  }


  private handleError(err: HttpErrorResponse)
  {
    console.log(err);
    let errMsg: string ="";
    switch (err.status)
    {
      case 400:
        errMsg="invalid request";
        break;
      case 404:
        errMsg="the resource you're looking for cannot be found"
        break;
      case 0:
        errMsg="cannot connect to backend"
        break;
      default:
        errMsg="ya dun goofed! error code"+err.status;
    }
    console.log(errMsg);
    return throwError(errMsg);
  }
}
