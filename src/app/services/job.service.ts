import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Job } from '../models/job';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  url = "http://127.0.0.1:8000/api/job";

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getJob(): Observable<Job[]> {
    return this.httpClient.get<Job[]>(this.url)
    .pipe(
      retry(2),
      catchError(this.handleError))
  }

  getJobById(id: number): Observable<Job> {
    return this.httpClient.get<Job>(this.url + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  saveJob(job: Job): Observable<Job> {
    return this.httpClient.post<Job>(this.url, JSON.stringify(job), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  updateJob(job: Job): Observable<Job> {
    return this.httpClient.put<Job>(this.url + '/' + job.id, JSON.stringify(job), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  deleteJob(job: Job) {
    return this.httpClient.delete<Job>(this.url + '/' + job.id, this.httpOptions)
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
