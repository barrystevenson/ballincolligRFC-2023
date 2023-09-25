import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatchDetailsScorersPage } from './match-details-scorers.page';

describe('MatchDetailsScorersPage', () => {
  let component: MatchDetailsScorersPage;
  let fixture: ComponentFixture<MatchDetailsScorersPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MatchDetailsScorersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
