import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacialConsciousnessAndReflectionComponent } from './racial-consciousness-and-reflection.component';

describe('RacialConsciousnessAndReflectionComponent', () => {
  let component: RacialConsciousnessAndReflectionComponent;
  let fixture: ComponentFixture<RacialConsciousnessAndReflectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RacialConsciousnessAndReflectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RacialConsciousnessAndReflectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
