import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskProgressCardComponent } from './task-progress-card.component';

describe('TaskProgressCardComponent', () => {
  let component: TaskProgressCardComponent;
  let fixture: ComponentFixture<TaskProgressCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskProgressCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskProgressCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
