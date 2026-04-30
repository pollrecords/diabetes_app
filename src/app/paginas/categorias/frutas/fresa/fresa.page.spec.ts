import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FresaPage } from './fresa.page';

describe('FresaPage', () => {
    let component: FresaPage;
    let fixture: ComponentFixture<FresaPage>;

    beforeEach(() => {
        fixture = TestBed.createComponent(FresaPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
