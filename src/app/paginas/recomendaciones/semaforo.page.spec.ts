import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SemaforoPage } from './recomendaciones';

describe('SemaforoPage', () => {
  let component: SemaforoPage;
  let fixture: ComponentFixture<SemaforoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SemaforoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
