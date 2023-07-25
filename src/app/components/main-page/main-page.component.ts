import { Component, OnInit } from '@angular/core';
import { TuduService } from 'src/app/services/tudu.service';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
    public tasksDone: any = [];
    public tasksTodo: any = [];

    constructor(private tuduService: TuduService) { }

    loadTasks() {
        const userId = localStorage.getItem('user_id') ?? ''
        this.tuduService.listByTaskAndStatus(userId, 1).subscribe(tasks => {
            this.tasksTodo = tasks;
        });

        this.tuduService.listByTaskAndStatus(userId, 2).subscribe(tasks => {
            this.tasksDone = tasks;
        });
    }

    ngOnInit(): void {
        this.loadTasks();
    }



    onCheckBoxClick(task_id: string, status: number) {
        this.tuduService.updateTask(task_id, status).subscribe(() => {
            this.loadTasks();
        });
    }
}
