import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChicharoPage } from './chicharo.page';

describe('ChicharoPage', () => {
  let component: ChicharoPage;
  let fixture: ComponentFixture<ChicharoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChicharoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
