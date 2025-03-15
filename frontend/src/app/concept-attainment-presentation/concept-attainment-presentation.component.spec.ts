import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptAttainmentPresentationComponent } from './concept-attainment-presentation.component';

describe('ConceptAttainmentPresentationComponent', () => {
  let component: ConceptAttainmentPresentationComponent;
  let fixture: ComponentFixture<ConceptAttainmentPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConceptAttainmentPresentationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConceptAttainmentPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
