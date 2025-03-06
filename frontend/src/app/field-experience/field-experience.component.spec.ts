import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldExperienceComponent } from './field-experience.component';

describe('FieldExperienceComponent', () => {
  let component: FieldExperienceComponent;
  let fixture: ComponentFixture<FieldExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FieldExperienceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
