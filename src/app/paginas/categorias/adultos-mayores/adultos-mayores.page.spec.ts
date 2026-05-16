import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdultosMayoresPage } from './adultos-mayores.page';

describe('AdultosMayoresPage', () => {
  let component: AdultosMayoresPage;
  let fixture: ComponentFixture<AdultosMayoresPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdultosMayoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
