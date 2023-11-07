import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCursosComponent } from './new-cursos.component';

describe('NewCursosComponent', () => {
    let component: NewCursosComponent;
    let fixture: ComponentFixture<NewCursosComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [NewCursosComponent],
        });
        fixture = TestBed.createComponent(NewCursosComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
