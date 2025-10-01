import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/bienvenida/bienvenida').then((m) => m.Bienvenida),
  },
  {
    path: 'to-do',
    loadComponent: () => import('./components/to-do-list/to-do-list').then((m) => m.ToDoList),
  },
  {
    path: 'contador',
    loadComponent: () => import('./components/contador/contador').then((m) => m.Contador),
  },
];
