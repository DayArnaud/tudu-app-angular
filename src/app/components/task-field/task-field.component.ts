import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { TuduService } from 'src/app/services/tudu.service';

@Component({
    selector: 'app-task-field',
    templateUrl: './task-field.component.html',
    styleUrls: ['./task-field.component.css']
})
export class TaskFieldComponent implements OnInit {
    @Input() showCheckbox: boolean = true;
    @Input() showDate: boolean = false;
    @Input() task: any;
    @Output() checkboxClick = new EventEmitter<any>();

    public taskDetail: any = {};

    constructor(private tuduService: TuduService) { }

    ngOnInit(): void {
        this.loadTaskDetails();
    }

    loadTaskDetails() {
        const taskId = this.task._id.$oid;
        this.tuduService.listTaskById(taskId).subscribe(task => {
            this.taskDetail = task;
        });
    }

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
