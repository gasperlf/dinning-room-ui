import { GradeResponse } from './../../../../shared/model/response/graderesponse';
import { EthnicGroupResponse } from './../../../../shared/model/response/ethnicgroupresponse';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

//environments
import { environment } from './../../../../../environments/environment';

//model
import { SocialStratumResponse } from './../../../../shared/model/response/socialstratumresponse';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  utilsApi: string;
  
  constructor(private http: HttpClient) { 
    this.utilsApi = `${environment.apiLocationsUrl}:${environment.apiLocationsPort}`;
  }

  getSocialStratum():Observable<SocialStratumResponse> {
    return this.http.get<SocialStratumResponse>(`${this.utilsApi}/socialStratum?page=0&size=20`);
  }

  getEcthnicGroups():Observable<EthnicGroupResponse> {
    return this.http.get<EthnicGroupResponse>(`${this.utilsApi}/ethnicGroups?page=0&size=20`);
  }

  getGrades():Observable<GradeResponse>{
    return this.http.get<GradeResponse>(`${this.utilsApi}/grades?page=0&size=20`);
  }
}
