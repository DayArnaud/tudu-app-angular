import { Component, OnInit } from '@angular/core';
import { TuduService } from 'src/app/services/tudu.service';

@Component({
    selector: 'app-planner',
    templateUrl: './planner.component.html',
    styleUrls: ['./planner.component.css'],
})
export class PlannerComponent implements OnInit {
    public taskTodo: any = [];

    constructor(private tuduService: TuduService) { }

    ngOnInit(): void {
        const userId = localStorage.getItem('user_id') ?? ''
        this.tuduService.listByTaskAndStatus(userId, 1).subscribe(tasks => {
            this.taskTodo = tasks;
        })

    }
}
