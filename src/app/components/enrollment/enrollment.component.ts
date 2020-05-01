import { NeighborhoodResponse } from './../../shared/model/neighborhoodresponse';
import { City } from 'src/app/shared/model/city';
import { CityResponse } from './../../shared/model/cityresponse';
import { DocumentType } from 'src/app/shared/model/documentType';
import { Department } from 'src/app/shared/model/department';
import { DepartmentResponse } from './../../shared/model/departmentresponse';
import { LocationsService } from './../../shared/services/locations.service';
import { Component, OnInit } from '@angular/core';
import { DocumentsService } from 'src/app/shared/services/documents.service';
import { NgForm } from '@angular/forms';
import { Neighborhood } from 'src/app/shared/model/neighborhood';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css']
})
export class EnrollmentComponent implements OnInit {

  private departmentResponse: DepartmentResponse;
  private documentTypeResponse; DocumentTypeResponse;
  private cityResponse: CityResponse;
  private neighborhoodResponse:NeighborhoodResponse;

  constructor(private locationService: LocationsService, private documentsService: DocumentsService) { }

  ngOnInit(): void {
    this.locationService.getDeparments()
      .subscribe(data => this.departmentResponse = data);

    this.documentTypeResponse = this.documentsService.getDocumentType()
      .subscribe(data => this.documentTypeResponse = data);
  }


  getDepartments(): Department[] {
    if(this.departmentResponse == null){
      return new Array();
    }
    return this.departmentResponse.content;
  }

  getDocumentsType(): DocumentType[] {
    return this.documentTypeResponse.content;
  }

  //events came from locations
  changeDepartment(value:string,form:NgForm) {
    this.locationService.getCities(value.split(":")[0])
     .subscribe(data => this.cityResponse = data);
     form.value.cityAddressId="";
     form.value.neighborhoodId="";
  }

  changeCity(value:string,form:NgForm){
    this.locationService.getNeighborhoods(value.split(":")[0])
    .subscribe(data=> this.neighborhoodResponse= data);
    form.value.neighborhoodId="";
  }

  getCities():City[]{
    if(this.cityResponse == null){
      return new Array();
    }
    return this.cityResponse.content;
  }

  getNeighborhoods():Neighborhood[]{

    if(this.neighborhoodResponse == null){
      return new Array();
    }
    return this.neighborhoodResponse.content;
  }

  enrollment(form: NgForm) {

  }

}
