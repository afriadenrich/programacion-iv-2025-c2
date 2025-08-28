import { Routes } from '@angular/router';
import { Tutoriales } from './pages/tutoriales/tutoriales';
import { Registro } from './pages/registro/registro';

export const routes: Routes = [
  {
    path: 'tutoriales',
    component: Tutoriales,
  },
  {
    path: 'registro',
    component: Registro,
  },
];
