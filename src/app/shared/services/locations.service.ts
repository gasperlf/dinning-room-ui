import { NeighborhoodResponse } from './../model/neighborhoodresponse';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DepartmentResponse } from '../model/departmentresponse';
import { CityResponse } from '../model/cityresponse';


@Injectable({
   providedIn: 'root'
})
export class LocationsService {

   locationsApi: string;

   constructor(private http: HttpClient) {
      this.locationsApi = `${environment.apiLocationsUrl}:${environment.apiLocationsPort}/locations`;
   }

   getDeparments(): Observable<DepartmentResponse> {
      return this.http.get<DepartmentResponse>(this.locationsApi);
   }

   getCities(departmentId: string): Observable<CityResponse> {
      let cities = `${this.locationsApi}/${departmentId}/cities?page=0&size=200`;
      return this.http.get<CityResponse>(cities);
   }

   getNeighborhoods(cityId: string): Observable<NeighborhoodResponse> {
      let neighborhoods = `${this.locationsApi}/cities/${cityId}/neighborhoods?page=0&size=358`;
      return this.http.get<NeighborhoodResponse>(neighborhoods);
   }
}
