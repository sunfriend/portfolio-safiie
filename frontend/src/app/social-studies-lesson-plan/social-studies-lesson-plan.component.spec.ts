import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialStudiesLessonPlanComponent } from './social-studies-lesson-plan.component';

describe('SocialStudiesLessonPlanComponent', () => {
  let component: SocialStudiesLessonPlanComponent;
  let fixture: ComponentFixture<SocialStudiesLessonPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialStudiesLessonPlanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialStudiesLessonPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
