import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultationComponent } from './components/consultation/consultation.component';
import { HomePageComponent } from './home-page/component/home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'praticiens',
    loadChildren: () => import('./praticiens/praticiens.module').then(modules => modules.PraticiensModule)
  },  {
    path: 'patients',
    loadChildren: () => import('./patients/patients.module').then(modules => modules.PatientsModule)
  },
  { path: 'consultations', component: ConsultationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
