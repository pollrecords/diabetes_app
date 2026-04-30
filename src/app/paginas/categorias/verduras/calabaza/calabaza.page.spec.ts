import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalabazaPage } from './calabaza.page';

describe('CalabazaPage', () => {
  let component: CalabazaPage;
  let fixture: ComponentFixture<CalabazaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CalabazaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
