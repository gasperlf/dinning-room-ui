import { Neighborhood } from './../../shared/model/entities/neighborhood';
import { City } from './../../shared/model/entities/city';
import { Department } from './../../shared/model/entities/department';
import { NeighborhoodResponse } from './../../shared/model/response/neighborhoodresponse';
import { CityResponse } from './../../shared/model/response/cityresponse';
import { LocationsService } from './../core/services/locations/locations.service';
import { DepartmentResponse } from './../../shared/model/response/departmentresponse';
import { DocumentType } from 'src/app/shared/model/entities/documentType';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { DocumentsService } from '../core/services/documenttype/documents.service';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.scss']
})
export class EnrollmentComponent implements OnInit {

  profileFormGroup: FormGroup;
  addressFormGroup: FormGroup;
  otheresFormGroup: FormGroup;
  photosFormGroup: FormGroup;

  private documentTypeResponse; DocumentTypeResponse;
  private departmentResponse: DepartmentResponse;
  private cityResponse: CityResponse;
  private neighborhoodResponse: NeighborhoodResponse;

  constructor(private _formBuilder: FormBuilder,
    private documentsService: DocumentsService,
    private locationsService: LocationsService) { }

  ngOnInit(): void {
    this.createForms();
    this.documentsService.getDocumentType().subscribe(data => this.documentTypeResponse = data);
    this.locationsService.getDeparments().subscribe(data => this.departmentResponse = data);
  }

  getDocumentsType(): DocumentType[] {
    if (this.documentTypeResponse == null) {
      return new Array();
    }
    return this.documentTypeResponse.content;
  }

  getDepartments(): Department[] {
    if (this.departmentResponse == null) {
      return new Array();
    }
    return this.departmentResponse.content;
  }

  onChangeDepartment(deptoId: Department) {

    console.log(deptoId);
    this.locationsService.getCities(new String(deptoId.id).valueOf())
      .subscribe(data => this.cityResponse = data);
    this.addressFormGroup.value.cityAddressId = null;
    this.addressFormGroup.value.neighborhoodId = null;
  }

  getCities(): City[] {
    if (this.cityResponse == null) {
      return new Array();
    }
    return this.cityResponse.content;
  }

  onChangeCity(cityId: City) {
    this.locationsService.getNeighborhoods(new String(cityId.id).valueOf())
      .subscribe(data => this.neighborhoodResponse = data);
    this.addressFormGroup.value.neighborhoodId = null;
  }

  getNeighborhoods(): Neighborhood[] {
    if (this.neighborhoodResponse == null) {
      return new Array();
    }
    return this.neighborhoodResponse.content;
  }

  private createForms() {
    this.profileFormGroup = this._formBuilder.group({
      documentTypeId: [null, Validators.compose([Validators.required])],
      dni: ['', Validators.required],
      cityNameDocument: [''],
      firstName: ['', Validators.required],
      secondName: [''],
      firstLastName: ['', Validators.required],
      secondLastName: [''],
      dateOfBirth: new FormControl(new Date()),
      gender: [null, Validators.compose([Validators.required])]
    });
    this.addressFormGroup = this._formBuilder.group({
      dapartmentId: [null, Validators.compose([Validators.required])],
      cityAddressId: [null, Validators.compose([Validators.required])],
      neighborhoodId: [null, Validators.compose([Validators.required])],
      address: [''],
      telephone: [''],
      cellphone: [''],
      socialStratumId: [null, Validators.compose([Validators.required])]
    });

    this.otheresFormGroup = this._formBuilder.group({

    });

    this.photosFormGroup = this._formBuilder.group({

    });
  }

}
