import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-task-field',
    templateUrl: './task-field.component.html',
    styleUrls: ['./task-field.component.css']
})
export class TaskFieldComponent {
    @Input() showCheckbox: boolean = true;
    @Input() showDate: boolean = false;
}
