import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheoryToPracticeComponent } from './theory-to-practice.component';

describe('TheoryToPracticeComponent', () => {
  let component: TheoryToPracticeComponent;
  let fixture: ComponentFixture<TheoryToPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheoryToPracticeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheoryToPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
