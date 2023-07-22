import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskActionButtonComponent } from './task-action-button.component';

describe('TaskActionButtonComponent', () => {
  let component: TaskActionButtonComponent;
  let fixture: ComponentFixture<TaskActionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskActionButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskActionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
