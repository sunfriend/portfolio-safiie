import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScienceLessonPlanComponent } from './science-lesson-plan.component';

describe('ScienceLessonPlanComponent', () => {
  let component: ScienceLessonPlanComponent;
  let fixture: ComponentFixture<ScienceLessonPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScienceLessonPlanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScienceLessonPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
