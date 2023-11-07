import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCursosComponent } from './edit-cursos.component';

describe('EditCursosComponent', () => {
    let component: EditCursosComponent;
    let fixture: ComponentFixture<EditCursosComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [EditCursosComponent],
        });
        fixture = TestBed.createComponent(EditCursosComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
