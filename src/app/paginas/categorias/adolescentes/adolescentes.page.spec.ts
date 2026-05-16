import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdolescentesPage } from './adolescentes.page';

describe('AdolescentesPage', () => {
  let component: AdolescentesPage;
  let fixture: ComponentFixture<AdolescentesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdolescentesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
