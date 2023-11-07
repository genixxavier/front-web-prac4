import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICurso, ICursoRequest } from '../interface/curso.interface';

@Injectable({
    providedIn: 'root',
})
export class CursoService {
    private readonly uri = `${environment.api.URI_BASE}/api`;

    constructor(private readonly http: HttpClient) {}

    getCursos(): Observable<ICurso[]> {
        return this.http.get<ICurso[]>(`${this.uri}/cursos`);
    }

    createCursos(curso: ICursoRequest): Observable<void> {
        return this.http.post<void>(`${this.uri}/cursos`, curso);
    }

    deleteCursos(cursoId: string): Observable<void> {
        return this.http.delete<void>(`${this.uri}/cursos/${cursoId}`);
    }
}
