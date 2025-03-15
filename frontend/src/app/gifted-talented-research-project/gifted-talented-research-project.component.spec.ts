import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftedTalentedResearchProjectComponent } from './gifted-talented-research-project.component';

describe('GiftedTalentedResearchProjectComponent', () => {
  let component: GiftedTalentedResearchProjectComponent;
  let fixture: ComponentFixture<GiftedTalentedResearchProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GiftedTalentedResearchProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiftedTalentedResearchProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
