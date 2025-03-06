import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningEnvironmentsComponent } from './learning-environments.component';

describe('LearningEnvironmentsComponent', () => {
  let component: LearningEnvironmentsComponent;
  let fixture: ComponentFixture<LearningEnvironmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearningEnvironmentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearningEnvironmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
