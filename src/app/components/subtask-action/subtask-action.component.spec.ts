import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtaskActionComponent } from './subtask-action.component';

describe('SubaskActionComponent', () => {
    let component: SubtaskActionComponent;
    let fixture: ComponentFixture<SubtaskActionComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SubtaskActionComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(SubtaskActionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
