import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManzanaPage } from './manzana.page';

describe('ManzanaPage', () => {
  let component: ManzanaPage;
  let fixture: ComponentFixture<ManzanaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ManzanaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
