import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColiflorPage } from './coliflor.page';

describe('ColiflorPage', () => {
  let component: ColiflorPage;
  let fixture: ComponentFixture<ColiflorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ColiflorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
