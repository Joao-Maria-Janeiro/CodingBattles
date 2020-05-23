import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap, first, flatMap } from 'rxjs/operators';

import {baseUrl} from '../constants';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllLanguages() : Observable<string[]> {
    return this.http.get<string[]>(baseUrl + "/users/languages");
  }

  signup(user: User): Observable<string> {
    return this.http.post<string>(baseUrl + "/users/signup", JSON.stringify({
      "username": user.username,
      "password": user.password,
      "email": user.email,
      "favourite_language": user.favourite_language,
      "ocupation": user.ocupation,
      "company": user.company,
      "languages": user.languages,
      "first_name": user.first_name,
      "last_name": user.last_name
    })).pipe(
      catchError(this.handleError<string>('signup'))
    );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
