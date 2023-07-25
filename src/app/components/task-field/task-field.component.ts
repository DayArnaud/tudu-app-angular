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

    getCategoryColor(category: number) {
        switch (category) {
            case 1:
                return 'var(--salmon)';
            case 2:
                return 'var(--yellow)';
            case 3:
                return 'var(--blue)';
            default:
                return 'var(--dark-blue)';
        }
    }
    getStatus(status: number) {
        if (status === 2) {
            return 'var(--gray)';
        }
        return;
    }
}
