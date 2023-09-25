import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatchDetailsInfoPage } from './match-details-info.page';

describe('MatchDetailsInfoPage', () => {
  let component: MatchDetailsInfoPage;
  let fixture: ComponentFixture<MatchDetailsInfoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MatchDetailsInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
