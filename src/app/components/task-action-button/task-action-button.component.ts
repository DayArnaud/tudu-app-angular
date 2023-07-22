import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-action-button',
  templateUrl: './task-action-button.component.html',
  styleUrls: ['./task-action-button.component.css']
})
export class TaskActionButtonComponent {
  @Input() iconSrc!: string;
  @Input() iconAlt!: string;
  @Input() buttonText!: string;
  // não esquecer os non-assertion ! aqui
}
