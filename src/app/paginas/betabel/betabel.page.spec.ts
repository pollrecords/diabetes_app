import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BetabelPage } from './betabel.page';

describe('BetabelPage', () => {
  let component: BetabelPage;
  let fixture: ComponentFixture<BetabelPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BetabelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
