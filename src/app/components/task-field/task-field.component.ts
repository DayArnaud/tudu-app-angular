import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-task-field',
    templateUrl: './task-field.component.html',
    styleUrls: ['./task-field.component.css']
})
export class TaskFieldComponent {
    @Input() showCheckbox: boolean = true;
    @Input() showDate: boolean = false;
    @Input() task: any;
    @Output() checkboxClick = new EventEmitter<any>();

    onCheckboxClick() {
        this.checkboxClick.emit(this.task);
    }
}
