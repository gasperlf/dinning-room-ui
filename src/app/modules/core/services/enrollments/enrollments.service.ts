import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators'

//environments
import { environment } from './../../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EnrollmentsService {

  enrollmentApi: string;

  constructor(private http: HttpClient) {
    this.enrollmentApi = `${environment.apiLocationsUrl}:${environment.apiLocationsPort}`;
  }

  enrollment(data: any) {
    return this.http.post<any>(`${this.enrollmentApi}/enrollments`, data);
  }

}
