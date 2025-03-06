import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaborationAndLeadershipComponent } from './collaboration-and-leadership.component';

describe('CollaborationAndLeadershipComponent', () => {
  let component: CollaborationAndLeadershipComponent;
  let fixture: ComponentFixture<CollaborationAndLeadershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollaborationAndLeadershipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollaborationAndLeadershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
