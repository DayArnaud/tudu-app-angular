import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskFieldComponent } from './task-field.component';

describe('TaskFieldComponent', () => {
  let component: TaskFieldComponent;
  let fixture: ComponentFixture<TaskFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
