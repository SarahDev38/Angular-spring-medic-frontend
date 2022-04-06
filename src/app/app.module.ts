import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';

import { AppComponent } from './app.component';
import { PraticienService } from './core/services/praticien.service';
import { HeaderComponent } from './core/components/header/header.component';
import { HomePageComponent } from './home-page/component/home-page/home-page.component';
import { ConsultationComponent } from './components/consultation/consultation.component';
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    ConsultationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    CalendarModule,
    ScheduleModule, 
    CheckBoxModule
  ],
  providers: [
    PraticienService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
