import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LentejaPage } from './lenteja.page';

describe('LentejaPage', () => {
  let component: LentejaPage;
  let fixture: ComponentFixture<LentejaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LentejaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
