import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { CursoService } from '../../services/curso.service';

@Component({
    selector: 'app-new-cursos',
    standalone: true,
    imports: [CommonModule, MatDialogModule, MatButtonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatProgressSpinnerModule, MatSnackBarModule],
    templateUrl: './new-cursos.component.html',
    styleUrls: ['./new-cursos.component.scss'],
})
export class NewCursosComponent {
    aulas = [
        { value: 'A01', viewValue: 'A01' },
        { value: 'B01', viewValue: 'B01' },
        { value: 'C01', viewValue: 'C01' },
        { value: 'D01', viewValue: 'D01' },
        { value: 'E01', viewValue: 'E01' },
    ];
    cursoForm: FormGroup;
    loading = false;

    constructor(
        private readonly fb: FormBuilder,
        private readonly _cursoService: CursoService,
        private _snackBar: MatSnackBar,
        public _dialogRef: MatDialogRef<NewCursosComponent>
    ) {
        _dialogRef.disableClose = true;
        this.cursoForm = this.fb.group({
            nombre: ['', [Validators.required]],
            descripcion: ['', [Validators.required]],
            aula: ['', [Validators.required]],
        });
    }

    saveCurso() {
        this.loading = true;

        this._cursoService.createCursos(this.cursoForm.value).subscribe({
            next: () => {
                this.loading = false;
                this._dialogRef.close(true);
                this.openSnackBar('Curso creado', 'alert-success');
            },
            error: err => {
                this.loading = false;
                this.openSnackBar('Error intente de nuevo', 'alert-danger');
                console.log(err);
            },
        });
    }

    openSnackBar(text: string, type: string) {
        this._snackBar.open(text, 'x', {
            horizontalPosition: 'end',
            verticalPosition: 'top',
            panelClass: type,
            duration: 3000,
        });
    }
}
