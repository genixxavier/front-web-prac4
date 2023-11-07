/* eslint-disable prettier/prettier */
export interface ICurso {
    id: string;
    nombre: string;
    descripcion: string;
    aula: string;
}

export interface ICursoRequest {
  nombre: string;
  descripcion: string;
  aula: string;
}
