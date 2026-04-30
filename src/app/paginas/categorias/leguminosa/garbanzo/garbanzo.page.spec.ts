import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GarbanzoPage } from './garbanzo.page';

describe('GarbanzoPage', () => {
  let component: GarbanzoPage;
  let fixture: ComponentFixture<GarbanzoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GarbanzoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
