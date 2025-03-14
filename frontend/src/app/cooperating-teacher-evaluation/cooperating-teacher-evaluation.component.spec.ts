import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CooperatingTeacherEvaluationComponent } from './cooperating-teacher-evaluation.component';

describe('CooperatingTeacherEvaluationComponent', () => {
  let component: CooperatingTeacherEvaluationComponent;
  let fixture: ComponentFixture<CooperatingTeacherEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CooperatingTeacherEvaluationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CooperatingTeacherEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
