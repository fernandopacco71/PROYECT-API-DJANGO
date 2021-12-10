import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Personal } from '../shared/personal';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
   // Define API
   apiURL = 'http://127.0.0.1:8080/';
  constructor(private http: HttpClient  ) { }
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  // HttpClient API get() method => Fetch employees list
  getpersonal(): Observable<Personal> {
    return this.http.get<Personal>(this.apiURL + 'personal/')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  } 
   // HttpClient API get() method => Fetch employee
   getpersonales(id:number): Observable<Personal> {
    return this.http.get<Personal>(this.apiURL + 'personal/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
   // HttpClient API post() method => Create employee
   createPersonal(Personal:Personal ): Observable<Personal> {
    //console.log(this.apiURL + 'personal/', JSON.stringify(Personal));
    return this.http.post<Personal>(this.apiURL + 'personal/', JSON.stringify(Personal), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  
  // HttpClient API put() method => Update employee
  updateEmployee(id:number, Personal:Personal): Observable<Personal> {
    return this.http.put<Personal>(this.apiURL + '/' + id, JSON.stringify(Personal), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  // Error handling 
  handleError(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
