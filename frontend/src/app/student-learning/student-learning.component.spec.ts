import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentLearningComponent } from './student-learning.component';

describe('StudentLearningComponent', () => {
  let component: StudentLearningComponent;
  let fixture: ComponentFixture<StudentLearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentLearningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
