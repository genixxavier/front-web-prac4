import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCursosComponent } from './components/list-cursos/list-cursos.component';
import { EditCursosComponent } from './components/edit-cursos/edit-cursos.component';

const routes: Routes = [
    {
        path: '',
        data: {
            title: '',
        },
        component: ListCursosComponent,
    },
    {
        path: 'edit/{id}',
        component: EditCursosComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CursosRoutingModule {}
