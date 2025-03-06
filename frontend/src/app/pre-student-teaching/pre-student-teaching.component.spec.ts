import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreStudentTeachingComponent } from './pre-student-teaching.component';

describe('PreStudentTeachingComponent', () => {
  let component: PreStudentTeachingComponent;
  let fixture: ComponentFixture<PreStudentTeachingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreStudentTeachingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreStudentTeachingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
