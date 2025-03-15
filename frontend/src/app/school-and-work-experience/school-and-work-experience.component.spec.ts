import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolAndWorkExperienceComponent } from './school-and-work-experience.component';

describe('SchoolAndWorkExperienceComponent', () => {
  let component: SchoolAndWorkExperienceComponent;
  let fixture: ComponentFixture<SchoolAndWorkExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolAndWorkExperienceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolAndWorkExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
