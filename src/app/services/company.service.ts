import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { Company } from '../models/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  url = "http://127.0.0.1:8000/api/company";

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getCompany(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(this.url)
    .pipe(
      retry(2),
      catchError(this.handleError))
  }

  // getCompanyById(id: number) {
  //   return this.httpClient.get<Company>(this.url + '/' + id)
  //     .pipe(
  //       map(response => {
  //         return response as Company;
  //       })
  //     )
  // }

  getCompanyById(id: number): Observable<Company> {
    return this.httpClient.get<Company>(this.url + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  saveCompany(company: Company): Observable<Company> {
    return this.httpClient.post<Company>(this.url, JSON.stringify(company), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  updateCompany(company: Company): Observable<Company> {
    return this.httpClient.put<Company>(this.url + '/' + company.id, JSON.stringify(company), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  deleteCompany(company: Company) {
    return this.httpClient.delete<Company>(this.url + '/' + company.id, this.httpOptions)
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
