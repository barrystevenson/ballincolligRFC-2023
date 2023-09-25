import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatchDetailsLineupPage } from './match-details-lineup.page';

describe('MatchDetailsLineupPage', () => {
  let component: MatchDetailsLineupPage;
  let fixture: ComponentFixture<MatchDetailsLineupPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MatchDetailsLineupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
