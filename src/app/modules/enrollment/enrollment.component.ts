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

  constructor(private _formBuilder: FormBuilder, private documentsService: DocumentsService) { }

  ngOnInit(): void {

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
      dapartmentId: [null,Validators.compose([Validators.required])],
      cityAddressId: [null,Validators.compose([Validators.required])],
      neighborhoodId: [null,Validators.compose([Validators.required])],
      address: [''],
      telephone: [''],
      cellphone: [''],
      socialStratumId:[null,Validators.compose([Validators.required])]
    });

    this.otheresFormGroup = this._formBuilder.group({

    });

    this.photosFormGroup = this._formBuilder.group({

    });

    this.documentTypeResponse = this.documentsService.getDocumentType()
      .subscribe(data => this.documentTypeResponse = data);
  }

  getDocumentsType(): DocumentType[] {
    if (this.documentTypeResponse == null) {
      return new Array();
    }
    return this.documentTypeResponse.content;
  }

}
