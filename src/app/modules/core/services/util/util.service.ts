import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

//environments
import { environment } from './../../../../../environments/environment';

//model
import { DocumentTypeResponse } from './../../../../shared/model/response/documenttyperesponse';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  utilsApi: string;
  
  constructor(private http: HttpClient) { 
    this.utilsApi = `${environment.apiLocationsUrl}:${environment.apiLocationsPort}`;
  }

  getDocumentType():Observable<DocumentTypeResponse> {
    return this.http.get<DocumentTypeResponse>(`${this.utilsApi}/documents/types`);
  }
}
