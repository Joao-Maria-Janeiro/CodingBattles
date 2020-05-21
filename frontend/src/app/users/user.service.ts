import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap, first } from 'rxjs/operators';

import {baseUrl} from '../constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  signup(username: string, password: string, email: string, favourite_language: string, ocupation: string, company: string, languages: [string], first_name: string, last_name: string): Observable<string> {
    return this.http.post<string>(baseUrl, JSON.stringify({
      "username": username,
      "password": password,
      "email": email,
      "favourite_language": favourite_language,
      "ocupation": ocupation,
      "company": company,
      "languages": languages,
      "first_name": first_name,
      "last_name": last_name
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
