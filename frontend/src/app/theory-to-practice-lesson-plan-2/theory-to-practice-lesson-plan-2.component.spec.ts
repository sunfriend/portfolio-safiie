import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheoryToPracticeLessonPlan2Component } from './theory-to-practice-lesson-plan-2.component';

describe('TheoryToPracticeLessonPlan2Component', () => {
  let component: TheoryToPracticeLessonPlan2Component;
  let fixture: ComponentFixture<TheoryToPracticeLessonPlan2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheoryToPracticeLessonPlan2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheoryToPracticeLessonPlan2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
