import { Component, OnInit, ViewChild } from '@angular/core';

import {
  AgendaService, DayService, EventRenderedArgs, EventSettingsModel, MonthAgendaService, MonthService, PopupOpenEventArgs, ScheduleComponent, ScheduleModule,
  TimelineMonthService, TimelineViewsService, TimelineYearService, WeekService, YearService
} from '@syncfusion/ej2-angular-schedule';
import { Consultation } from 'src/app/core/models/consultation';
import { ConsultationService } from 'src/app/core/services/consultation.service';
import { ChangeEventArgs } from '@syncfusion/ej2-angular-dropdowns';
import { CheckBoxComponent } from '@syncfusion/ej2-angular-buttons';
import { PraticienService } from 'src/app/core/services/praticien.service';
import { Praticien } from 'src/app/core/models/praticien';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss'],
  providers: [DayService, WeekService, MonthService, MonthAgendaService, YearService,
    TimelineMonthService, TimelineViewsService, TimelineYearService, AgendaService]
})
export class ConsultationComponent implements OnInit {
  public consultations!: Consultation[];
  public praticiens!: Praticien[];
  public selectedDate: Date = new Date();
  public eventSettings!: EventSettingsModel;

  @ViewChild('scheduleObj') scheduleObj!: ScheduleComponent;
  @ViewChild('praticiensObj') praticiensObj!: CheckBoxComponent[];

  public allowMultiple = true;
  private colors: string[] = ['#81d4fa', '#a5d6a7', '#ffcc80', '#9fa8da', '#ef9a9a',
    '#bcaaa4', '#c5e1a5', '#ce93d8', '#fff59d', '#90caf9', '#ffab91', '#b39ddb',
    '#e6ee9c', '#b0bec5', '#80deea', '#f48fb1', '#ffe082', '#80cbc4'];

  constructor(
    private consultationService: ConsultationService,
    private praticienService: PraticienService) {
  }

  ngOnInit(): void {
    this.consultationService.findAll().subscribe(data => {
      this.consultations = data;
      this.setEventSettings(data);
    });
    this.praticienService.findAll().subscribe(data => {
      this.praticiens = data;
    });
  }

  public onPopupOpen(args: PopupOpenEventArgs): void {
    args.cancel = true;
    // détails consultation à implementer
    // + bouton modifier
  }


  public onChange(args: ChangeEventArgs): void {
    const checkBoxes: CheckBoxComponent[] = this.praticiensObj;
    checkBoxes.forEach((checkBoxObj: CheckBoxComponent) => {
      if (checkBoxObj.checked) {
        console.log(checkBoxes.indexOf(checkBoxObj));
        // modifier la liste des consultations affichées
      }
    });
  }

  public OnEventRendered(args: EventRenderedArgs) {
    var categoryColor = this.colors[args.data['id'] % this.colors.length];
    args.element.style.backgroundColor = categoryColor;
  }

  private setEventSettings(consultations: Consultation[]): void {
    this.eventSettings = {
      dataSource: consultations,
      fields: {
        id: 'id',
        subject: {
          name: 'titre'
        },
        isAllDay: {
          name: 'is_all_day'
        },
        startTime: {
          name: 'date_debut'
        },
        endTime: {
          name: 'date_fin'
        }
      }
    };
  }

  // pour calendar :
  public weekStart: number = 1;
  public minDate: Date = new Date("03/07/2022");
  public maxDate: Date = new Date("03/27/2022");
  public value: Date = new Date("03/16/2022");



}