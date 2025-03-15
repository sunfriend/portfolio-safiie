import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteracyLogComponent } from './literacy-log.component';

describe('LiteracyLogComponent', () => {
  let component: LiteracyLogComponent;
  let fixture: ComponentFixture<LiteracyLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiteracyLogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiteracyLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
