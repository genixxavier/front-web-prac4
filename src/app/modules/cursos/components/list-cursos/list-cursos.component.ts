import { OnInit, Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Subscription } from 'rxjs';
import { CursoService } from '../../services/curso.service';
import { ICurso } from '../../interface/curso.interface';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NewCursosComponent } from '../new-cursos/new-cursos.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DeleteCursosComponent } from '../delete-cursos/delete-cursos.component';
import { EditCursosComponent } from '../edit-cursos/edit-cursos.component';

@Component({
    selector: 'app-list-cursos',
    standalone: true,
    imports: [CommonModule, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatButtonModule, MatIconModule, MatTooltipModule, MatDialogModule],
    templateUrl: './list-cursos.component.html',
    styleUrls: ['./list-cursos.component.scss'],
})
export class ListCursosComponent implements OnInit {
    subscription = new Subscription();
    displayedColumns: string[] = ['id', 'name', 'description', 'classroom', 'actions'];
    dataSource = new MatTableDataSource<ICurso>();
    loading = true;
    resultsLength = 0;
    pageSize = 10;
    page = 0;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    constructor(
        private readonly _cursoService: CursoService,
        public dialog: MatDialog
    ) {}

    ngOnInit(): void {
        this.loadData();
    }

    search() {
        this.page = 0;
        this.paginator.pageIndex = 0;
        this.loadData();
    }

    loadData(): void {
        this.loading = true;

        this.subscription.add(
            this._cursoService.getCursos().subscribe({
                next: data => {
                    console.log('asasas', data);
                    this.dataSource.data = data || [];
                    this.resultsLength = data.length || 0;
                    this.loading = false;
                },
                error: () => {
                    this.loading = false;
                },
            })
        );
    }

    openNewCurso() {
        const dialogRef = this.dialog.open(NewCursosComponent);

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.loadData();
            }
        });
    }

    openEditCurso(curso: ICurso) {
        const dialogRef = this.dialog.open(EditCursosComponent, {
            data: curso,
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.loadData();
            }
        });
    }

    openDeleteCurso(curso: ICurso) {
        const dialogRef = this.dialog.open(DeleteCursosComponent, {
            data: curso,
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.loadData();
            }
        });
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
}
