import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// from angular material
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
// from own custom module
import { SharedModule } from './../../shared/shared.module';

// from own components 
import { DashboardComponent } from './../../modules/dashboard/dashboard.component';
import { DefaultComponent } from './default.component';
import { EnrollmentComponent } from 'src/app/modules/enrollment/enrollment.component';
import { DocumentsService } from 'src/app/modules/core/services/documenttype/documents.service';




@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    EnrollmentComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule

  ],
  providers: [
    DocumentsService
  ]
})
export class DefaultModule { }
