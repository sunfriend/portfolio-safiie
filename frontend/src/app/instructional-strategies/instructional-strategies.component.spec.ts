import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionalStrategiesComponent } from './instructional-strategies.component';

describe('InstructionalStrategiesComponent', () => {
  let component: InstructionalStrategiesComponent;
  let fixture: ComponentFixture<InstructionalStrategiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstructionalStrategiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructionalStrategiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
