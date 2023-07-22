import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-progress-card',
  templateUrl: './task-progress-card.component.html',
  styleUrls: ['./task-progress-card.component.css']
})
export class TaskProgressCardComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() progressPercent!: number;

  constructor() { }
}

// import { Component, OnInit } from '@angular/core';
// import { TaskService } from './task.service';

// @Component({
//   selector: 'app-parent',
//   templateUrl: './parent.component.html',
//   styleUrls: ['./parent.component.css']
// })
// export class ParentComponent implements OnInit {
//   tasks = [];

//   constructor(private taskService: TaskService) { }

//   ngOnInit(): void {
//     this.taskService.getTasks().subscribe(data => {
//       this.tasks = data;
//     });
//   }
// }
