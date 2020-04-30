import { Department } from 'src/app/shared/model/department';
import { DepartmentResponse } from './../../shared/model/departmentresponse';
import { LocationsService } from './../../shared/services/locations.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css']
})
export class EnrollmentComponent implements OnInit {

  departmentResponse: DepartmentResponse;

  constructor(private locationService: LocationsService) { }

  ngOnInit(): void {
    this.locationService.getDeparments()
      .subscribe(data => {
        this.departmentResponse = data;
      });
  }


  getDepartments(){
     return this.departmentResponse.content;
  }

}
