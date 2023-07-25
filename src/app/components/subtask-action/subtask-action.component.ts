import { Component, Input } from '@angular/core';

interface Isubtask {
    description: string
}

@Component({
    selector: 'app-subtask-action',
    templateUrl: './subtask-action.component.html',
    styleUrls: ['./subtask-action.component.css']
})
export class SubtaskActionComponent {
    @Input() subtask!: Isubtask;
}
