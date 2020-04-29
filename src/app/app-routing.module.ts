import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EnrollmentComponent } from './components/enrollment/enrollment.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'enrollments', component: EnrollmentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
