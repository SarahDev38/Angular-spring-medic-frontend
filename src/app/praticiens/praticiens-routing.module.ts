import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { PraticienListComponent } from './components/praticien-list/praticien-list.component';
import { PraticienCreateComponent } from './components/praticien-create/praticien-create.component';
import { PraticienSingleComponent } from './components/praticien-single/praticien-single.component';
import { PraticienUpdateComponent } from './components/praticien-update/praticien-update.component';

const routes: Routes = [
    { path: 'create', component: PraticienCreateComponent },
    { path: ':id', component: PraticienSingleComponent },
    { path: ':id/update', component: PraticienUpdateComponent },
    { path: '', component: PraticienListComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
],
exports: [
    RouterModule
]
})
export class PraticiensRoutingModule { }
