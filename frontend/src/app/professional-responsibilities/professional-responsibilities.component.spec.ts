import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalResponsibilitiesComponent } from './professional-responsibilities.component';

describe('ProfessionalResponsibilitiesComponent', () => {
  let component: ProfessionalResponsibilitiesComponent;
  let fixture: ComponentFixture<ProfessionalResponsibilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessionalResponsibilitiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalResponsibilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
