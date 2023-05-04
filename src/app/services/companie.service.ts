import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Companie } from '../models/companie';

@Injectable({
  providedIn: 'root'
})
export class CompanieService {
  url = "http://127.0.0.1:8000/api/companie";

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getCompanie(): Observable<Companie[]> {
    return this.httpClient.get<Companie[]>(this.url)
    .pipe(
      retry(2),
      catchError(this.handleError))
  }

  getCompanieById(id: number): Observable<Companie> {
    return this.httpClient.get<Companie>(this.url + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  saveCompanie(companie: Companie): Observable<Companie> {
    return this.httpClient.post<Companie>(this.url, JSON.stringify(companie), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  updateCompanie(companie: Companie): Observable<Companie> {
    return this.httpClient.put<Companie>(this.url + '/' + companie.id, JSON.stringify(companie), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  deleteCompanie(companie: Companie) {
    return this.httpClient.delete<Companie>(this.url + '/' + companie.id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
