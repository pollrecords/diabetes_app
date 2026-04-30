import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CacahuatePage } from './cacahuate.page';

describe('CacahuatePage', () => {
  let component: CacahuatePage;
  let fixture: ComponentFixture<CacahuatePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CacahuatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
