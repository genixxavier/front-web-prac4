import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoService } from '../../services/curso.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ICurso } from '../../interface/curso.interface';

@Component({
    selector: 'app-delete-cursos',
    standalone: true,
    imports: [CommonModule, MatProgressSpinnerModule, MatSnackBarModule, MatDialogModule],
    templateUrl: './delete-cursos.component.html',
    styleUrls: ['./delete-cursos.component.scss'],
})
export class DeleteCursosComponent {
    loading = false;
    constructor(
        private readonly _cursoService: CursoService,
        private _snackBar: MatSnackBar,
        public _dialogRef: MatDialogRef<DeleteCursosComponent>,
        @Inject(MAT_DIALOG_DATA) public curso: ICurso
    ) {
        _dialogRef.disableClose = true;
    }

    deleteCurso() {
        this.loading = true;

        this._cursoService.deleteCursos(this.curso.id).subscribe({
            next: () => {
                this.loading = false;
                this._dialogRef.close(true);
                this.openSnackBar('Curso eliminado', 'alert-success');
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
