import { HomeComponent } from './public/components/home/home.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { EnrollmentComponent } from './modules/enrollment/enrollment.component';
import { EnrollmentSearchComponent } from './modules/enrollment-search/enrollment-search.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  {
    path: 'admin', component: DefaultComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'enrollments/search', component: EnrollmentSearchComponent },
      { path: 'enrollments/new', component: EnrollmentComponent }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
