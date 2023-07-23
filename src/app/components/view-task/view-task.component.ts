import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-view-task',
    templateUrl: './view-task.component.html',
    styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {

    member = {
        firstName: 'João Paulo',
        profile: '../../../assets/circle-solid.svg',
        comment: 'Adicionar comentário...'
    }

    constructor() { }

    ngOnInit(): void {

    }

}
