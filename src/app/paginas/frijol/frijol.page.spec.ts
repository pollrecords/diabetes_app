import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrijolPage } from './frijol.page';

describe('FrijolPage', () => {
  let component: FrijolPage;
  let fixture: ComponentFixture<FrijolPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FrijolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
