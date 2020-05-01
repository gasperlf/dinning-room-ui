import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private ngXSpinnerService: NgxSpinnerService) {

  }

  ngOnInit() {
    this.spinner();
  }

  spinner() {
    this.ngXSpinnerService.show();
    setTimeout(() => {
      this.ngXSpinnerService.hide();
    }, 3000);
  }

}
