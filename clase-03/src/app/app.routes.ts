import { Routes } from '@angular/router';
import { Alumnos } from './pages/alumnos/alumnos';
import { Profesores } from './pages/profesores/profesores';

export const routes: Routes = [
  {
    path: 'alumnos',
    component: Alumnos,
  },
  {
    path: 'profesores',
    component: Profesores,
  },
];
