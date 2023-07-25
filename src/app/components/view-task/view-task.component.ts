import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, LOCALE_ID } from '@angular/core';
import { TuduService } from 'src/app/services/tudu.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface ISubtask {
    _id: {
        $oid: string;
    };
    created_at: string;
    description: string;
    updated_at: string;
    isCompleted: boolean
}

interface ITaskDetail {
    _id: {
        $oid: string;
    };
    category: number;
    created_at: string;
    description: string;
    expire_date: string;
    status: number;
    subtask: ISubtask[];
    title: string;
    updated_at: string;
    user_id: {
        $oid: string;
    };
}

interface IComment {
    _id: {
        $oid: string;
    };
    content: string;
    created_at: string;
    name: string;
    task_id: {
        $oid: string;
    };
    updated_at: string;
    user_id: {
        $oid: string;
    };
}

@Component({
    selector: 'app-view-task',
    templateUrl: './view-task.component.html',
    styleUrls: ['./view-task.component.css'],
    providers: [{ provide: LOCALE_ID, useValue: 'pt' }]
})
export class ViewTaskComponent implements OnInit {

    member = {
        profile: '../../../assets/circle-solid.svg',
    }

    public taskDetail: ITaskDetail = {
        _id: {
            $oid: ''
        },
        category: -1,
        created_at: '',
        description: '',
        expire_date: '',
        status: 0,
        subtask: [],
        title: '',
        updated_at: '',
        user_id: {
            $oid: ''
        }
    };

    public comments: IComment[] = [];
    public categorySelected = ['trabalho', 'pessoal', 'Estudos'];
    public formSubTask!: FormGroup;
    public formComment!: FormGroup;

    constructor(private route: ActivatedRoute, private tuduService: TuduService, private router: Router) { }

    loadTaskView() {
        const taskId = this.route.snapshot.paramMap.get('task_id') ?? '';
        this.tuduService.listTaskById(taskId).subscribe(task => {
            if (!task) {
                this.router.navigateByUrl('/main-page');
                return;
            }
            this.taskDetail = task as ITaskDetail;
        });

        this.tuduService.listAllComments(taskId).subscribe((comment) => {
            this.comments = comment as IComment[];
        });
    }

    ngOnInit(): void {
        this.loadTaskView();
        this.formComment = new FormGroup({
            content: new FormControl('', [Validators.required]),
        });

        this.formSubTask = new FormGroup({
            description: new FormControl('', [Validators.required]),
        });
    }

    registerComment(task_id: string) {
        if (this.formComment.valid) {
            const comment = {
                content: this.formComment.get('content')?.value,
                user_id: localStorage.getItem('user_id') ?? '',
                name: localStorage.getItem('name') ?? '',
            }
            this.tuduService.createComment(comment, task_id).subscribe(() => {
                this.loadTaskView();
            });
        }
    }

    onRegisterSubTask() {
        const taskId = this.route.snapshot.paramMap.get('task_id') ?? '';
        if (this.formSubTask.valid) {
            const subtaskRegistered = {
                description: this.formSubTask.get('description')?.value
            }
            this.tuduService.createSubtask(taskId, subtaskRegistered.description).subscribe(() => {
                this.loadTaskView();
            });
        }
    }

}
