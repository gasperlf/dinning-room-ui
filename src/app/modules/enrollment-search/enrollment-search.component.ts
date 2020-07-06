import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';

import { EnrollmentsService } from './../core/services/enrollments/enrollments.service';
import { BeneficiaryResponse } from 'src/app/shared/model/response/beneficiaryresponse';

@Component({
  selector: 'app-enrollment-search',
  templateUrl: './enrollment-search.component.html',
  styleUrls: ['./enrollment-search.component.scss']
})
export class EnrollmentSearchComponent implements OnInit {

  searchEnrollment: FormGroup;
  beneficiaries: Array<BeneficiaryResponse>;
  displayedColumns: string[] = ['identifier','document', 'names', 'surNames','faceId'];

  constructor(private _formBuilder: FormBuilder,
    private enrollmentsService: EnrollmentsService) { }

  ngOnInit(): void {

    this.beneficiaries = [];
    this.searchEnrollment = this._formBuilder.group({
      dni: ['']
    });
  }

  searchEnrollmentAction() {
    console.log(this.searchEnrollment.value);
    this.beneficiaries = [];
    if (this.searchEnrollment.value) {
      this.enrollmentsService.search(this.searchEnrollment.value)
        .subscribe(data =>this.beneficiaries.push(data));
    }

  }

}
