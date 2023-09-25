import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatchDetailsPage } from './match-details.page';

describe('MatchDetailsPage', () => {
  let component: MatchDetailsPage;
  let fixture: ComponentFixture<MatchDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MatchDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
