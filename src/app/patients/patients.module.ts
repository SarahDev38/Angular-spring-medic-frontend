import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PatientsRoutingModule } from './patients-routing.module';



@NgModule({
  declarations: [
    PatientListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PatientsRoutingModule
  ]
})
export class PatientsModule { }
