import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdultoPage } from './adulto.page';

describe('AdultoPage', () => {
  let component: AdultoPage;
  let fixture: ComponentFixture<AdultoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdultoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
