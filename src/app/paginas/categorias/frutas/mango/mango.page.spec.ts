import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MangoPage } from './mango.page';

describe('MangoPage', () => {
    let component: MangoPage;
    let fixture: ComponentFixture<MangoPage>;

    beforeEach(() => {
        fixture = TestBed.createComponent(MangoPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
