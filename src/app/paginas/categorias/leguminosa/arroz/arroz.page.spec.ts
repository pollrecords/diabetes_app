import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArrozPage } from './arroz.page';

describe('ArrozPage', () => {
  let component: ArrozPage;
  let fixture: ComponentFixture<ArrozPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrozPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
