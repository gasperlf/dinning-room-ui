import { EnrollmentsService } from './../core/services/enrollments/enrollments.service';
import { DocumentTypeResponse } from './../../shared/model/response/documenttyperesponse';
import { EthnicGroupResponse } from './../../shared/model/response/ethnicgroupresponse';
import { Grade } from './../../shared/model/entities/grade';
import { GradeResponse } from './../../shared/model/response/graderesponse';
import { SocialStratumResponse } from './../../shared/model/response/socialstratumresponse';
import { UtilService } from './../core/services/util/util.service';
import { Neighborhood } from './../../shared/model/entities/neighborhood';
import { City } from './../../shared/model/entities/city';
import { Department } from './../../shared/model/entities/department';
import { NeighborhoodResponse } from './../../shared/model/response/neighborhoodresponse';
import { CityResponse } from './../../shared/model/response/cityresponse';
import { LocationsService } from './../core/services/locations/locations.service';
import { DepartmentResponse } from './../../shared/model/response/departmentresponse';
import { DocumentType } from 'src/app/shared/model/entities/documentType';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DocumentsService } from '../core/services/documenttype/documents.service';
import { SocialStratum } from 'src/app/shared/model/entities/socialstratum';
import { EthnicGroup } from 'src/app/shared/model/entities/ethnicgroup';

import { Subject, Observable } from 'rxjs';
import { WebcamImage, WebcamInitError } from 'ngx-webcam';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Router } from '@angular/router';



@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false, showError: true }
  }]
})
export class EnrollmentComponent implements OnInit {

  profileFormGroup: FormGroup;
  addressFormGroup: FormGroup;
  otheresFormGroup: FormGroup;
  photosFormGroup: FormGroup;

  private documentTypeResponse: DocumentTypeResponse;
  private departmentResponse: DepartmentResponse;
  private cityResponse: CityResponse;
  private neighborhoodResponse: NeighborhoodResponse;
  private socialStratumResponse: SocialStratumResponse;
  private gradeResponse: GradeResponse;
  private ethnicGroupResponse: EthnicGroupResponse;

  public captures: Array<string>;

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();

  constructor(private _formBuilder: FormBuilder,
    private documentsService: DocumentsService,
    private locationsService: LocationsService,
    private utilService: UtilService,
    private enrollmentsService: EnrollmentsService,
    private router:Router) {
    this.captures = [];
  }

  ngOnInit(): void {
    this.createForms();
    this.documentsService.getDocumentType().subscribe(data => this.documentTypeResponse = data);
    this.locationsService.getDeparments().subscribe(data => this.departmentResponse = data);
    this.utilService.getSocialStratum().subscribe(data => this.socialStratumResponse = data);
    this.utilService.getGrades().subscribe(data => this.gradeResponse = data);
    this.utilService.getEcthnicGroups().subscribe(data => this.ethnicGroupResponse = data);
  }

  getDocumentsType(): DocumentType[] {
    if (this.documentTypeResponse == null) {
      return new Array();
    }
    return this.documentTypeResponse.content;
  }

  /**
   * Returns a list of departments.
   */
  getDepartments(): Department[] {
    if (this.departmentResponse == null) {
      return new Array();
    }
    return this.departmentResponse.content;
  }

  /**
   * Event from view
   * @param deptoId department selected by user.
   */
  onChangeDepartment(deptoId: Department) {

    console.log(deptoId);
    this.locationsService.getCities(new String(deptoId.id).valueOf())
      .subscribe(data => this.cityResponse = data);
    this.addressFormGroup.value.cityAddressId = null;
    this.addressFormGroup.value.neighborhoodId = null;
  }

  /**
   * Returns a list of ciyies from the department
   */
  getCities(): City[] {
    if (this.cityResponse == null) {
      return new Array();
    }
    return this.cityResponse.content;
  }

  /**
   * Event from the view.
   * @param cityId city selected by user.
   */
  onChangeCity(cityId: City) {
    this.locationsService.getNeighborhoods(new String(cityId.id).valueOf())
      .subscribe(data => this.neighborhoodResponse = data);
    this.addressFormGroup.value.neighborhoodId = null;
  }

  /**
   * Returns a list of neighborhoods from the city
   */
  getNeighborhoods(): Neighborhood[] {
    if (this.neighborhoodResponse == null) {
      return new Array();
    }
    return this.neighborhoodResponse.content;
  }

  /**
   * Returns list of social stratum
   * Estrato 1, Estrato 2 and so on...
   */
  getSocialStratums(): SocialStratum[] {
    if (this.socialStratumResponse == null) {
      return new Array();
    }
    return this.socialStratumResponse.content;
  }

  /**
   * Returns grades 
   * Example Primero, Tercero, Decimo.
   */
  getGrades(): Grade[] {
    if (this.gradeResponse == null) {
      return new Array();
    }
    return this.gradeResponse.content;
  }

  /**
   * Returns a list of ethnic groups 
   * Mulatom, mestizo Indio .. so on.
   */
  getEthnicGroups(): EthnicGroup[] {

    if (this.ethnicGroupResponse == null) {
      return new Array();
    }
    return this.ethnicGroupResponse.content;
  }

  /**
   * Capture images
   */
  errors: WebcamInitError[] = [];
  // latest snapshot
  webcamImage: WebcamImage = null;

  triggerSnapshot(): void {
    this.trigger.next();
  }

  videoOptions: MediaTrackConstraints = {
    width: { ideal: 288 },
    height: { ideal: 288 },
    noiseSuppression: true
  };

  handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
  }

  handleImage(webcamImage: WebcamImage): void {

    if (this.captures.length <= 8) {
      this.captures.push(webcamImage.imageAsBase64);
    }

  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  removeImages() {
    this.captures = [];
  }

  removeImage(index: number) {
    this.captures.splice(index, 1);
  }

  /**
   * save information from view
   */

  saveInfoBeneficiary() {

    var request = {
      documentTypeId: this.profileFormGroup.value.documentTypeId.documentTypeId,
      dni: this.profileFormGroup.value.dni,
      cityNameDocumentExpedition: this.profileFormGroup.value.cityNameDocument,
      firstName: this.profileFormGroup.value.firstName,
      secondName: this.profileFormGroup.value.secondName,
      firstLastName: this.profileFormGroup.value.firstLastName,
      secondLastName: this.profileFormGroup.value.secondLastName,
      dateOfBirth: this.profileFormGroup.value.dateOfBirth,
      cityNameOfBirth: this.profileFormGroup.value.cityOfBirth,
      gender: this.profileFormGroup.value.gender,
      cityAddressId: this.addressFormGroup.value.cityAddressId.id,
      neighborhoodId: this.addressFormGroup.value.neighborhoodId.id,
      address: this.addressFormGroup.value.address,
      telephoneNumber: this.addressFormGroup.value.telephoneNumber,
      cellphoneNumber: this.addressFormGroup.value.cellphone,
      ethnicGroupId: this.otheresFormGroup.value.ethnicGroupId.ethnicGroupId,
      gradeId: this.otheresFormGroup.value.gradeId.gradeId,
      groupName: this.otheresFormGroup.value.nameGroup,
      socialStratumId: this.otheresFormGroup.value.socialStratumId.socialStratumId,
      instituteId: 1,
      images: this.captures
    };

    this.enrollmentsService.enrollment(request);

    this.router.navigateByUrl('/admin/enrollments');

  }

  /**
   * inititialize of different forms to the view.
   */
  private createForms() {

    this.profileFormGroup = this._formBuilder.group({
      documentTypeId: [null, Validators.compose([Validators.required])],
      dni: ['', Validators.required],
      cityNameDocument: [''],
      firstName: ['', Validators.required],
      secondName: [''],
      firstLastName: ['', Validators.required],
      secondLastName: [''],
      dateOfBirth: ['', Validators.required],
      gender: [null, Validators.compose([Validators.required])],
      cityOfBirth: ['', Validators.required]
    });
    this.addressFormGroup = this._formBuilder.group({
      dapartmentId: [null, Validators.compose([Validators.required])],
      cityAddressId: [null, Validators.compose([Validators.required])],
      neighborhoodId: [null, Validators.compose([Validators.required])],
      address: ['', Validators.compose([Validators.required])],
      telephoneNumber: [''],
      cellphone: ['']
    });

    this.otheresFormGroup = this._formBuilder.group({
      socialStratumId: [null, Validators.compose([Validators.required])],
      ethnicGroupId: [null, Validators.compose([Validators.required])],
      gradeId: [null, Validators.compose([Validators.required])],
      nameGroup: [''],
    });

    this.photosFormGroup = this._formBuilder.group({
    });

    this.captures = [];

  }

}
