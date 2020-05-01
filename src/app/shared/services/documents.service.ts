import { DocumentTypeResponse } from './../model/documenttyperesponse';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  documentTypeApi: string;

  constructor(private http: HttpClient) {
    this.documentTypeApi = `${environment.apiLocationsUrl}:${environment.apiLocationsPort}/documents/types`;
   }

   getDocumentType():Observable<DocumentTypeResponse> {
     return this.http.get<DocumentTypeResponse>(this.documentTypeApi);
   }
}
