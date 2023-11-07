import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        pathMatch: 'full',
        title: 'Dasboard',
        data: {
            title: 'Dasboard',
        },
    },
    {
        path: 'cursos',
        data: {
            title: 'Admin Cursos',
        },
        loadChildren: () => import('../app/modules/cursos/cursos.module').then(m => m.CursosModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
