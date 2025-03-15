import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingIndigenousHistoryPresentationComponent } from './teaching-indigenous-history-presentation.component';

describe('TeachingIndigenousHistoryPresentationComponent', () => {
  let component: TeachingIndigenousHistoryPresentationComponent;
  let fixture: ComponentFixture<TeachingIndigenousHistoryPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeachingIndigenousHistoryPresentationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeachingIndigenousHistoryPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
