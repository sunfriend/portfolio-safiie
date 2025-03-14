import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteracyWritingAssignmentComponent } from './literacy-writing-assignment.component';

describe('LiteracyWritingAssignmentComponent', () => {
  let component: LiteracyWritingAssignmentComponent;
  let fixture: ComponentFixture<LiteracyWritingAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiteracyWritingAssignmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiteracyWritingAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
