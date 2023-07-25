import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { TuduService } from 'src/app/services/tudu.service';
import { forkJoin } from 'rxjs';
import { Router } from '@angular/router';

interface IsubtaskRegistered {
    description: string
}

@Component({
    selector: 'app-create-task',
    templateUrl: './create-task.component.html',
    styleUrls: ['./create-task.component.css'],
})

export class CreateTaskComponent implements OnInit {
    public nonRegisteredSubtasks: IsubtaskRegistered[] = [];
    public inputSubTask!: FormGroup;
    public taskForm!: FormGroup;

    constructor(private tuduService: TuduService, private router: Router) { }

    ngOnInit(): void {
        this.inputSubTask = new FormGroup({
            description: new FormControl('', [Validators.required]),
        });

        this.taskForm = new FormGroup({
            title: new FormControl('', [Validators.required]),
            task_description: new FormControl('', [Validators.required]),
            category: new FormControl('', [Validators.required]),
            expire_date: new FormControl('', [Validators.required]),
        });
    }

    onEnter() {
        if (this.inputSubTask.valid) {
            const subtaskRegistered: IsubtaskRegistered = {
                description: this.inputSubTask.get('description')?.value
            }
            this.nonRegisteredSubtasks.push(subtaskRegistered);
        }
    }

    registerTask() {
        if (this.taskForm.valid) {

            const newTask = {
                title: this.taskForm.get('title')?.value,
                description: this.taskForm.get('task_description')?.value,
                status: 1,
                category: parseInt(this.taskForm.get('category')?.value),
                expire_date: this.taskForm.get('expire_date')?.value,
                user_id: localStorage.getItem('user_id') ?? '',
            }

            this.tuduService.createTask(newTask).subscribe((task: any) => {
                const task_id = task['_id']['$oid'];

                if (this.nonRegisteredSubtasks.length > 0) {

                    const subtaskObservables = this.nonRegisteredSubtasks.map(({ description }) => {
                        return this.tuduService.createSubtask(task_id, description);
                    })

                    forkJoin(subtaskObservables).subscribe(() => {
                        this.router.navigateByUrl(`/view-task/${task_id}`);
                    });

                    this.router.navigateByUrl(`/view-task/${task_id}`);
                } else {
                    this.router.navigateByUrl(`/view-task/${task_id}`);
                }

            })
        }
    }
}
