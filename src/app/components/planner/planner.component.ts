import { Component } from '@angular/core';
import {
  CalendarDateFormatter,
} from 'angular-calendar';
import { CustomDateFormatter } from './custom-date-formatter.provider';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.css'],
  providers: [
    {
      provide: CalendarDateFormatter,
      useClass: CustomDateFormatter,
    },
  ],
})
export class PlannerComponent {
  viewDate: Date = new Date();
  locale: string = "en"
}
