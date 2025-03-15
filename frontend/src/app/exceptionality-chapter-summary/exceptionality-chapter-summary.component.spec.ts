import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExceptionalityChapterSummaryComponent } from './exceptionality-chapter-summary.component';

describe('ExceptionalityChapterSummaryComponent', () => {
  let component: ExceptionalityChapterSummaryComponent;
  let fixture: ComponentFixture<ExceptionalityChapterSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExceptionalityChapterSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExceptionalityChapterSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
