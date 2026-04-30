import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BerenjenaPage } from './berenjena.page';

describe('BerenjenaPage', () => {
  let component: BerenjenaPage;
  let fixture: ComponentFixture<BerenjenaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BerenjenaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
