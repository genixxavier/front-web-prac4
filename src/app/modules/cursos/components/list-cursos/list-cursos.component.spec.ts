import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCursosComponent } from './list-cursos.component';

describe('ListCursosComponent', () => {
    let component: ListCursosComponent;
    let fixture: ComponentFixture<ListCursosComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ListCursosComponent],
        });
        fixture = TestBed.createComponent(ListCursosComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
