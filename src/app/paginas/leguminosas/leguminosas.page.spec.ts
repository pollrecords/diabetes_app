import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeguminosasPage } from './leguminosas.page';

describe('LeguminosasPage', () => {
  let component: LeguminosasPage;
  let fixture: ComponentFixture<LeguminosasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LeguminosasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
