import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerduraPage } from './verdura.page';

describe('VerduraPage', () => {
  let component: VerduraPage;
  let fixture: ComponentFixture<VerduraPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VerduraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
