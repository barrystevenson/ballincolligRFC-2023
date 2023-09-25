import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewMatchPage } from './new-match.page';

describe('NewMatchPage', () => {
  let component: NewMatchPage;
  let fixture: ComponentFixture<NewMatchPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewMatchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
