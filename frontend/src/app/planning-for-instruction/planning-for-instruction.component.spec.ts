import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningForInstructionComponent } from './planning-for-instruction.component';

describe('PlanningForInstructionComponent', () => {
  let component: PlanningForInstructionComponent;
  let fixture: ComponentFixture<PlanningForInstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanningForInstructionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanningForInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
