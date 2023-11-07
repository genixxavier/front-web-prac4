import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCursosComponent } from './delete-cursos.component';

describe('DeleteCursosComponent', () => {
    let component: DeleteCursosComponent;
    let fixture: ComponentFixture<DeleteCursosComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [DeleteCursosComponent],
        });
        fixture = TestBed.createComponent(DeleteCursosComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
