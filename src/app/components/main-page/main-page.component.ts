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

    ngOnInit(): void {
        const userId = localStorage.getItem('user_id') ?? ''
        this.tuduService.listByTaskAndStatus(userId, 1).subscribe(tasks => {
            this.tasksTodo = tasks;
            console.log(this.tasksTodo);
        });

        this.tuduService.listByTaskAndStatus(userId, 2).subscribe(tasks => {
            this.tasksDone = tasks;
            console.log(this.tasksDone);
        });
    }

    onCheckboxClick(e: any) {

    }
}
