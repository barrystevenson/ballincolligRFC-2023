import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditMatchPage } from './edit-match.page';

describe('EditMatchPage', () => {
  let component: EditMatchPage;
  let fixture: ComponentFixture<EditMatchPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditMatchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
