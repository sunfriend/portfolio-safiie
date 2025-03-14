import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroTeachingReflectionComponent } from './micro-teaching-reflection.component';

describe('MicroTeachingReflectionComponent', () => {
  let component: MicroTeachingReflectionComponent;
  let fixture: ComponentFixture<MicroTeachingReflectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MicroTeachingReflectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MicroTeachingReflectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
