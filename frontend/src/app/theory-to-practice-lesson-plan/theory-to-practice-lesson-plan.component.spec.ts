import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheoryToPracticeLessonPlanComponent } from './theory-to-practice-lesson-plan.component';

describe('TheoryToPracticeLessonPlanComponent', () => {
  let component: TheoryToPracticeLessonPlanComponent;
  let fixture: ComponentFixture<TheoryToPracticeLessonPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheoryToPracticeLessonPlanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheoryToPracticeLessonPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
