import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PraticienListComponent } from './components/praticien-list/praticien-list.component';
import { PraticienSingleComponent } from './components/praticien-single/praticien-single.component';
import { PraticienCreateComponent } from './components/praticien-create/praticien-create.component';
import { PraticienUpdateComponent } from './components/praticien-update/praticien-update.component';
import { PraticiensRoutingModule } from './praticiens-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PraticienListComponent,
    PraticienSingleComponent,
    PraticienCreateComponent,
    PraticienUpdateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PraticiensRoutingModule
  ]
})
export class PraticiensModule {
}
